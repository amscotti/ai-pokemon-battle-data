# AI Pokémon Battle Data

[![asciicast](https://asciinema.org/a/3LKFVYca4Awj886LfM3lgrmeH.svg)](https://asciinema.org/a/3LKFVYca4Awj886LfM3lgrmeH)


Can ChatGPT 3.5 compete against an experienced Pokémon Master? With ChatGPT's extensive knowledge encompassing a wide range of topics, it might seem plausible that it could pick the perfect Pokémon to ensure success in every battle.

However, a spoiler alert is in order: that's not really the case. ChatGPT version 3.5 has its limitations when it comes to understanding the complexities of Pokémon types and making optimal recommendations. It often falls short in providing the best choices. 

Nevertheless, this application serves a different purpose. It aims to explore the functionality of ChatGPT by leveraging a [JSON schema](open-ai-response-schema.json) to structure the responses in a deterministic manner. Although ChatGPT 3.5 may not possess the skills to become a Pokémon Master, the application has been successful in its objective of utilizing ChatGPT's capabilities within a well-defined framework.

By employing a JSON schema, the application ensures that the responses from ChatGPT align with a predefined structure. This structured approach allows for better control over the data returned and enables further processing and analysis of the generated recommendations.

So while ChatGPT 3.5 may not have the expertise of a Pokémon Master, this project showcases how it can still contribute within a controlled context, demonstrating the possibilities of leveraging AI technologies like ChatGPT in innovative ways.

<p align="center">
  <a href="https://nodejs.org/">
    <img src="images/i3LVA.png" alt="Pikachu as a Software Developer - DALL-E">
  </a>
</p>


## Reference Material
- [Native JSON Output From GPT-4](https://yonom.substack.com/p/native-json-output-from-gpt-4)
- [Function calling - OpenAI Docs](https://platform.openai.com/docs/guides/gpt/function-calling)

## Prerequisites

Before running the application, ensure you have the following prerequisites:

- Node.js
- NPM
- OpenAI API key

## Installation
- (Optional) Install Node.js with NVM using the project's `.nvmrc` file by running `nvm install` from the project folder.
- Install the dependencies with `npm install`.
- Set the OpenAI API key:
	- Obtain an API key from OpenAI and set it as the `OPENAI_API_KEY` environment variable. You can either set it directly in your terminal session or create a `.env` file in the project root directory and add the following line: `OPENAI_API_KEY=your-api-key`

## Usage

To start the Pokémon Battle Expert CLI, run the following command: `npm start`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue on the project repository.

## License

This project is licensed under the [MIT License](LICENSE)