import {LoremIpsum} from "lorem-ipsum";
import {ArrowRightOutlined} from "@ant-design/icons";
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


// @ts-ignore
export const categoryTree: any = [
    {
      title: 'Electronics',
      key: 'electronics',
      children: [
        {
          title: 'Cell Phones & Smartphones',
          key: 'cell-phones-&-smartphones',
          children: [
            {
              title: 'Cell phone Accessories',
              key: 'cell-phone-accessories',
            },
            {
              title: 'Applications',
              key: 'applications',
            },
            {
              title: 'Smart Watches',
              key: 'smart-watches',

            },
          ],
        },
        {
            title: 'Business & Industrial',
            key: 'business-&-industrial',
        }
      ],
    },
  ];
export default categories;
