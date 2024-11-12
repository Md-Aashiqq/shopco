export interface ProductProps {
    id: number;
    name: string;
    image: string;
    rating : number;
    price: number;
    discountPrice?: number;
    discountPercentage?: number
}

const products : ProductProps[] = [
    {
        id: 1,    
        name: "T-SHIRT WITH TAPE DETAILS",
        image: "../../assets/shirt.png",
        rating: 4.5,
        price: 120,
    },
    {
        id: 2,    
        name: "SKINNY FIT JEANS",
        image: "../../assets/shirt.png",
        rating: 3.5,
        price: 260,
        discountPrice: 240,
        discountPercentage: 20
    },
    {
        id: 3,    
        name: "CHECKERED SHIRT",
        image: "../../assets/shirt.png",
        rating: 4.5,
        price: 180,
    },
    {
        id: 4,    
        name: "SLEEVE STRIPED T-SHIRT",
        image: "../../assets/shirt.png",
        rating: 4.5,
        price: 160,
        discountPrice: 130,
        discountPercentage: 30
    },
    {
        id: 5,
        name: "VERTICAL STRIPED SHIRT",
        image: "../../assets/shirt.png",
        rating: 5.0,
        price: 232,
        discountPercentage: 20,
        discountPrice: 212,
    },
    {
        id: 6,
        name: "COURAGE GRAPHIC T-SHIRT",
        image: "../../assets/shirt.png",
        rating: 4.0,
        price: 145,
    },
    {
        id: 7,
        name: "LOOSE FIT BERMUDA SHORTS",
        image: "../../assets/shirt.png",
        rating: 3.0,
        price: 80,

    },
    {
        id: 8,
        name: "FADED SKINNY JEANS",
        image: "../../assets/shirt.png",
        rating: 4.0,
        price: 215,

    }
]

export default products



export const testimonialData = [
    {
        id:1,
        rating: 5,
        name: "Sarah M.",
        review: "I love this product! It's so comfortable and stylish. The fit is perfect and the quality is great. Highly recommended!"
    },
    {
        id:2,
        rating: 4,
        name: "Alex K.",
        review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
        id:3,
        rating: 5,
        name: "James L.",
        review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },{
        id: 4,
        rating: 4,
        name: "Emily S.",
        review: "I'm in love with the way Shop.co's website is designed. It's user-friendly and visually appealing, making it easy to navigate and find exactly what I'm looking for."
    },
    {
        id: 5,
        rating: 5,
        name: "Robert H.",
        review: "Shop.co's customer service is outstanding! They go above and beyond to ensure that my order is delivered on time and in good condition. I've never had a problem with my purchases."
    }
]