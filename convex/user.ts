import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        imageUrl: v.string(),
        email: v.string(),
        subscription: v.optional(v.string()),
    },
    handler: async (ctx, { name, imageUrl, email, subscription }) => {
        // if user already exists, do not create
        const user = await ctx.db
            .query("UserTable")
            .filter((q) => q.eq(q.field("email"), email))
            .collect();

        if (user.length === 0) {
            const userData = {
                name,
                imageUrl,
                email,
                subscription,
            }
           await ctx.db.insert("UserTable", userData);
            return userData;
        }

        return user[0];
    }
})