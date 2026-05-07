import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { ArticleModel } from '../models/ArticleModel.js'
import {VerifyToken} from "../middlewares/VerifyToken.js";
export const adminapp = exp.Router();
//read all users
adminapp.get("/user", VerifyToken("ADMIN"), async (req, res) => {
    const users = await UserModel.find();
    res.status(200).json({ message: "users", payload: users });
});
// read all articles
adminapp.get("/article", VerifyToken("ADMIN"), async (req, res) => {
    const articles = await ArticleModel.find();
    res.status(200).json({ message: "articles", payload: articles });
});


// user active or not 
adminapp.put("/user/:id", VerifyToken("ADMIN"), async (req, res) => {
    try {
        const { isuseractive } = req.body;
        const user = await UserModel.findByIdAndUpdate(req.params.id, { $set: { isUserActive: isuseractive } }, { new: true });

        if (!user) {
            return res.status(400).json({ message: "user not found" });
        }

const status=isuseractive?"activated":"blocked"
res.status(200).json({message:`user ${status}`,payload:user})
    }catch(err)
{
res.status(500).json({message:"erro occured",error:err.message})
}

})


//is article active yes or no
// user active or not 
adminapp.put("/article/:id", VerifyToken("ADMIN"), async (req, res) => {
    try {

        const { isarticleactive } = req.body;
        const article = await ArticleModel.findByIdAndUpdate(req.params.id, { $set: { isArticleActive: isarticleactive } }, { new: true });
        if (!article) {
            return res.status(400).json({ message: "article not found" });
        }

const status=isarticleactive?"activated":"blocked"
res.status(200).json({message:`article ${status}`,payload:article})
    }catch(err)
{
res.status(500).json({message:"erro occured",error:err.message})
}

})

adminapp.delete("/user/:id", VerifyToken("ADMIN"), async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        res.status(200).json({ message: "user deleted permanently" });
    } catch (err) {
        res.status(500).json({ message: "error occured", error: err.message });
    }
});

adminapp.delete("/article/:id", VerifyToken("ADMIN"), async (req, res) => {
    try {
        const article = await ArticleModel.findByIdAndDelete(req.params.id);
        if (!article) {
            return res.status(404).json({ message: "article not found" });
        }
        res.status(200).json({ message: "article deleted permanently" });
    } catch (err) {
        res.status(500).json({ message: "error occured", error: err.message });
    }
});
