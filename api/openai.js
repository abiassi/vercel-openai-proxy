module.exports = async (req, res) => {
    const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    // Dynamically import node-fetch
    const fetch = require('node-fetch');


    const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    });

    console.log("Sending request to OpenAI with body:", req.body);

    const data = await response.json();
    res.status(response.status).send(data);
};
