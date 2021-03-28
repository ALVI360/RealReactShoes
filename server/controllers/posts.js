import PostMessage from "../models/postMessage.js";

const shoes = [
    {
        photo: "photos/Men1.jpg",
        class: "Mshoes",
        name: "shoe1",
        msg: "This shoe is cool ",
        showMore: true,
    },
    {
        photo: "photos/Men2.jpg",
        class: "Mshoes",
        name: "shoe2",
        msg: "This shoe is awsome ",
        showMore: false,
    },
    {
        photo: "photos/Men3.jpg",
        class: "Mshoes",
        name: "shoe3",
        msg: "This shoe is white ",
        showMore: false,
    },
    {
        photo: "photos/Men4.jpg",
        class: "Mshoes",
        name: "shoe4",
        msg: "This shoe is blue ",
        showMore: false,
    },
    {
        photo: "photos/Men5.jpg",
        class: "Mshoes",
        name: "shoe5",
        msg: "This shoe is nice ",
        showMore: false,
    },
    {
        photo: "photos/Men6.jpg",
        class: "Mshoes",
        name: "shoe6",
        msg: "This shoe is nice ",
        showMore: false,
    },
    {
        photo: "photos/women1.jpg",
        class: "WShoes",
        name: "shoe7",
        msg: "This shoe is the best out there ",
        showMore: false,
    },
    {
        photo: "photos/women2.jpg",
        class: "WShoes",
        name: "shoe8",
        msg: "This shoe is good for running ",
        showMore: false,
    },
    {
        photo: "photos/women3.jpg",
        class: "WShoes",
        name: "shoe9",
        msg: "This shoe is bla bla bla ",
        showMore: false,
    },
    {
        photo: "photos/women4.jpg",
        class: "WShoes",
        name: "shoe10",
        msg: "This shoe is a real shoe ",
        showMore: false,
    },
    {
        photo: "photos/women5.jpg",
        class: "WShoes",
        name: "shoe11",
        msg: "This shoe is recomended by 10 random people ",
        showMore: false,
    },
    {
        photo: "photos/women6.jpg",
        class: "WShoes",
        name: "shoe12",
        msg: "This shoe is goes well with white clothes",
        showMore: false,
    },
    {
        photo: "photos/Kids1.jpg",
        class: "KShoes",
        name: "shoe13",
        msg: "This shoe is for kids ",
        showMore: false,
    },
    {
        photo: "photos/Kids2.jpg",
        class: "KShoes",
        name: "shoe14",
        msg: "This shoe is not for running ",
        showMore: false,
    },
    {
        photo: "photos/Kids3.jpg",
        class: "KShoes",
        name: "shoe15",
        msg: "This shoe is can get dirty easily ",
        showMore: false,
    },
    {
        photo: "photos/Kids4.jpg",
        class: "KShoes",
        name: "shoe16",
        msg: "This shoe is a must buy ",
        showMore: false,
    },
    {
        photo: "photos/Kids5.jpg",
        class: "KShoes",
        name: "shoe17",
        msg: "This shoe is is not for everyone ",
        showMore: false,
    },
    {
        photo: "photos/Kids6.jpg",
        class: "KShoes",
        name: "shoe18",
        msg: "This shoe has a unique color ",
        showMore: false,
    },
    {
        photo: "photos/Kids7.jpg",
        class: "KShoes",
        name: "shoe19",
        msg: "This is is the real bla bla ",
        showMore: false,
    },
];

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();

        console.log(postMessage);

        res.status(200).json(shoes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// // TODO later
// export const createPost = (req, res) => {

//     res.send('Post creation!');

// }
