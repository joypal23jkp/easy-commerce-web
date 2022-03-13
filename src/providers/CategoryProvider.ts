import {LoremIpsum} from "lorem-ipsum";
const loremIpsum = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
})


const categories: any = Array();
for (let start = 0; start < 10; start++ ){
    categories.push({
        name: loremIpsum.generateWords(2),
        icon: "",
    });
}


export default categories;
