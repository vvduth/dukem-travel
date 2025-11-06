import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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

export const GetUserTrips = query({
    args: {
        uid: v.id("UserTable"),
    },
    handler: async (ctx, { uid }) => {
        const result = await ctx.db.query("TripDetailTable")
        .filter(q => q.eq(q.field("uid"), uid))
        .order("desc")
        .collect();

        return result;
    }
})