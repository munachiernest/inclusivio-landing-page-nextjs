import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    waitlist: defineTable({
        name: v.string(),
        email: v.string(),
        company: v.string(),
        useCase: v.string(),
    }),
}); 