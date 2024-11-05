import Instance from "../models/instance.model.js";

export const getInstances = async (req, res) => {
  try {
    const instances = await Instance.find({ isDeleted: { $ne: true } });
    // console.log("Instances: ",instances)
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

export const getInstanceById = async (req, res) => {
    try {
      const instance = await Instance.findById(req.params.id);
      if (!instance) {
        return res.status(404).json({ error: "Instance not found" });
      }
      res.status(200).json(instance);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch instance" });
    }
  };

  export const updateInstance = async (req, res) => {
    try {
      const { ticket } = req.body;
  
      if (ticket < 0) {
        return res.status(400).json({ error: "Ticket count cannot be negative" });
      }
  
      const updatedInstance = await Instance.findByIdAndUpdate(req.params.id, req.body, { new: true });
      
      if (!updatedInstance) {
        return res.status(404).json({ error: "Instance not found" });
      }
      
      res.status(200).json(updatedInstance);
    } catch (error) {
      res.status(500).json({ error: "Failed to update instance" });
    }
  };

  export const softDeleteInstance = async (req, res) => {
    try {
        console.log("On Soft delete")
      const { id } = req.params;
      await Instance.findByIdAndUpdate(id, { isDeleted: true });
      res.json({ message: "Instance soft-deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: "Error deleting instance." });
    }
  };
  