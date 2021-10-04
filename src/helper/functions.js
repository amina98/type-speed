const words = [
    "Lorem ipsum dolor sit amet consectetur. 1",
    "Lorem ipsum dolor sit amet consectetur.2",
    "Lorem ipsum dolor sit amet consectetur.3",
    "Lorem ipsum dolor sit amet consectetur.4",
    "Lorem ipsum dolor sit amet consectetur.5",
];
export const randomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
};