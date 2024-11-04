import Instance from "../models/instance.model.js";

export const getInstances = async (req, res) => {
  try {
    const instances = await Instance.find();
    console.log("Instances: ",instances)
    res.status(200).json(instances);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch instances" });
  }
};

export const createInstance = async (req, res) => {
  const { instanceName, participantType, ticket } = req.body;
  const newInstance = new Instance({ instanceName, participantType, ticket });
  await newInstance.save();
  res.status(201).json("Instance Created Successfully");
};
