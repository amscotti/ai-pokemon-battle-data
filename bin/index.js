import { readFile } from 'fs/promises'
import { promptUser } from '../src/pokemon.js'
import { Configuration, OpenAIApi } from 'openai'
import ora from 'ora'
import 'dotenv/config'

const schemaPath = './src/open-ai-response-schema.json'

if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is not set. Please set the environment variable.')
  process.exit(1)
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)
const schema = JSON.parse(await readFile(schemaPath, 'utf8'))

const fetchData = async pokemon => {
  const spinner = ora('Consulting the Pokémon expert!').start()

  try {
    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-4-0613',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant with extensive knowledge of the original Pokémon games, and Generation I of Pokémon'
        },
        {
          role: 'user',
          content: `What are the best Pokémon for competing against ${pokemon}, Please provide a description of why?`
        }
      ],
      functions: [{ name: 'set_pokemon', parameters: schema }],
      function_call: { name: 'set_pokemon' },
      temperature: 0.1
    })

    spinner.succeed('Data retrieved!')
    const returnData = JSON.parse(chatCompletion.data.choices[0].message.function_call.arguments)

    console.log(`Our resident expert suggests using the following Pokémon against ${returnData.TargetPokemon.Name}:\n`)

    returnData.SelectedPokemon.forEach(pokemon => {
      console.log(`Name: ${pokemon.Name}, Pokedex Number: ${pokemon.PokedexNumber}, Type(s): ${pokemon.Type.join(', ')}`)
      console.log(`${pokemon.Description}\n`)
    })
  } catch (error) {
    spinner.fail('Error occurred while fetching data.')
    console.error(error)
  }
}

const targetPokemon = await promptUser()
fetchData(targetPokemon)
