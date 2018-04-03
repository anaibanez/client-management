const Joi = require('joi');


const geoSchema = {
  lat: Joi.string().required(),
  lng: Joi.string().required()
};

const addressSchema = {
  street: Joi.string().required(),
  geo: Joi.object(geoSchema).required()
};

const companySchema = {
  name: Joi.string().min(2).required()
};

const commonSchema = {
  body: {
    username: Joi.string().token().min(3).max(30)
                .required(),

    name: Joi.string().min(2).regex(/^[a-zA-Z ]+$/)
                .required(),

    email: Joi.string().email(),

    address: Joi.object(addressSchema),
    company: Joi.object(companySchema)
  }
};

const createSchema = {
  ...commonSchema
};

const updateSchema = {
  ...commonSchema,
  params: {
    id: Joi.number().required()
  }
};

const deleteSchema = {
  params: {
    id: Joi.number().required()
  }
};

const getSchema = {
  params: {
    id: Joi.number().required()
  }
};

module.exports = { getSchema, createSchema, updateSchema, deleteSchema };
