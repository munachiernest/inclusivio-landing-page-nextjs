import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addToWaitlist = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.string(),
    useCase: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();
    if (existing) {
      throw new Error("This email is already on the waitlist.");
    }
    await ctx.db.insert("waitlist", {
      name: args.name,
      email: args.email,
      company: args.company,
      useCase: args.useCase,
    });
    return null;
  },
}); 