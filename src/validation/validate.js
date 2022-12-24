import Joi from "joi";
export const checkAdmin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
}).required()

export const checkUser = Joi.object({
  speaker: Joi.string().max(64).required(),
  profession: Joi.string().max(64).required(),
  type: Joi.string().valid('jismoniy shaxs', 'yuridik shaxs').required()
}).required()

export const checkUserCompany = Joi.object({
  speaker: Joi.string().max(64).required(),
  profession: Joi.string().max(64).required(),
  type: Joi.string().valid('jismoniy shaxs', 'yuridik shaxs').required(),
  company: Joi.string().max(64).required()
}).required()

export const checkParams = Joi.object({
  id: Joi.number().integer().required()
})

export const checkNavigation = (method) => {
  if (method == 'POST') {
    return Joi.object({
      navigation_title: Joi.string().required()
    })
  }
  else {
    return Joi.object({
      navigation_title: Joi.string()
    })
  }
}
export const checkCategories = (method) => {
  if (method == 'POST') {
    return Joi.object({
      category_title: Joi.string().required()
    })
  }
  else {
    return Joi.object({
      category_title: Joi.string()
    })
  }
}
export const checkCards = (method) => {
  if (method == 'POST') {
    return Joi.object({
      title:Joi.string().required().max(64),
      description:Joi.string().required(),
      text:Joi.string().required(),
      date:Joi.date().required(),
      time:Joi.date().timestamp().required(),
      turi:Joi.string().required().max(12),
      youtube: Joi.string(),
      subcategory_id:Joi.number().integer().required(),
      user_id:Joi.number().integer().required()
    }).required()
  }
  else {
    return Joi.object({
      title:Joi.string().max(64),
      description:Joi.string(),
      text:Joi.string(),
      date:Joi.date(),
      time:Joi.date(),
      turi:Joi.string().max(12),
      youtube:Joi.string(),
      subcategory_id:Joi.number().integer(),
      user_id:Joi.number().integer()
    }).required()
  }
}