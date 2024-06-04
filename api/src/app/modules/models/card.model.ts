import {InferSchemaType, model, Schema} from "mongoose";

const cardSchema = new Schema({
  cardTitle: {
    type: String,
    required: true
  },
  cardDescription: {
    type: String,
    required: true
  }
})

type Card = InferSchemaType<typeof cardSchema>

export default model<Card>("Card", cardSchema)