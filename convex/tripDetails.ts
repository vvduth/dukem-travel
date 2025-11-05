import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateTripDetails = mutation({
    args: {
        tripId: v.string() ,
        uid: v.id("UserTable"),
        tripDetail: v.any()
    },
    handler: async (ctx, { tripId, uid, tripDetail }) => {
        const result = await ctx.db.insert("TripDetailTable", {
            tripDetail  : tripDetail,
            tripId: tripId,
            uid: uid
        })

        return result;
    }
})