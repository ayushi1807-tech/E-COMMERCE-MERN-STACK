import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../model/ProductModel.js";

export const addProduct = async (req, res) => {
    try {
        let { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // Handle sizes: parse if string, else use as is
        let parsedSizes = Array.isArray(sizes) ? sizes : JSON.parse(sizes);

        // Upload images to Cloudinary
        let image1 = req.files?.image1?.[0]?.buffer ? await uploadOnCloudinary(req.files.image1[0].buffer) : null;
        let image2 = req.files?.image2?.[0]?.buffer ? await uploadOnCloudinary(req.files.image2[0].buffer) : null;
        let image3 = req.files?.image3?.[0]?.buffer ? await uploadOnCloudinary(req.files.image3[0].buffer) : null;
        let image4 = req.files?.image4?.[0]?.buffer ? await uploadOnCloudinary(req.files.image4[0].buffer) : null;

        if (!image1 || !image2 || !image3 || !image4) {
            return res.status(400).json({ message: "All images are required and must be uploaded successfully." });
        }

        let productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: parsedSizes,
            bestseller: bestseller === "true" || bestseller === true,
            image1,
            image2,
            image3,
            image4
        };

        const product = await Product.create(productData);
        return res.status(201).json(product);
    } catch (error) {
        console.log("product error", error);
        return res.status(500).json({ messege: `addProduct Error: ${error}` });
    }
};

export const listProduct = async (req, res)=>{
    try{
        const  product = await Product.find({});
        return res.status(201).json(product);
    }catch(error){
        console.log("listProduct error", error);
        return res.status(500).json({ messege: `listProduct Error: ${error}` });
    }
}

export const removeProduct = async (req, res) => {
    try{
            let {id}= req.params;
            const product = await Product.findByIdAndDelete(id);
            return res.status(200).json(product);
    }catch(error){
        console.log("removeProduct error", error);
        return res.status(500).json({ messege: `removeProduct Error: ${error}` });
    }
}