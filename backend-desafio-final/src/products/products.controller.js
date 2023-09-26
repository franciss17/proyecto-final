import { productsModel } from "./products.model.js";

const create = async (req, res) => {
    try {
        const newProducts = await productsModel.create({
            ...req.body,
            user_id: req.user_id,
        });
        return res.json(newProducts);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await productsModel.findOne(id);
        if (!products) {
            return res.status(404).send({ error: "Product not found" });
        }
        if (products.user_id !== req.user_id) {
            return res.status(401).send({ error: "Unauthorized" })
        }
        await productsModelModel.remove(id);
        return res.status(204).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error.message });
    }
}

export const productsController = {
    create,
    remove,
};