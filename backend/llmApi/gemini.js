import {GoogleGenerativeAI} from '@google/generative-ai'

const genAI = new GoogleGenerativeAI("AIzaSyBvAjQH3cyHvC0_mPVOZJvdBEiHHF7K9gw");

export default async function getGeminiResponse() {

    try {
        const model = genAI.getGenerativeModel({model: "gemini-pro"});

        const prompt = "Write one liner quirky message to tell the sender that I'm busy and can't chat at the moment... wait till I get my stuffs done";

        const result = Promise.race([
            model.generateContent(prompt).then(response => ({response})),
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(new Error('Model response timed out after 10 seconds'));
                }, 10000); // 10 seconds in milliseconds
            })
        ]).catch(error => {
            console.error('Error:', error.message);
        });
        const {response} = await result;
        return response.response.text();
    } catch (e) {
        console.log(e);
    }

    return "GEMINI failed, but I'm busy so can't chat"
}

