const express = require('express')
const router = express.Router()
const User=require("../model/auth.model.js")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// router.post('/login', (req, res) => {
//     const {  email, password } = req.body
//        User.findOne({email:email},(err,user)=>{
//            if(user){
//                 if(password===user.password){
//                   console.log("login successfull")
//                     res.send({ message:"Login Succesfully",user:user})
//                 }else{
//                     res.send({message:"Invalid Password"})
//                 }
//            }else{
//             res.send({message:"User Not Regitered "})
//            }
//        })
// })


// Login a registered user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not registered" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate a JWT token with name, email, and role
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name, // Include the user's name
        email: user.email, // Include the user's email
        role: user.role, // Include the user's role
      },
      process.env.JWT_SECRET, // Secret key from .env
      { expiresIn: "1h" } // Token expiration time
    );

    // Send the token and user details in the response
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Error logging in", error });
  }
});
// //  ------------register user by admin controller-----------
// router.post('/register', (req, res) => {
//   const { name, email, password } = req.body
//   User.findOne({ email: email }, (err, user) => {
//     if (user) {
//       res.send({ message: 'User Already Registered' })
//     } else {
//       const user = new User({
//         name,
//         email,
//         password,
//       })
//       user.save((err) => {
//         if (err) {
//           res.send(err)
//         } else {
//           res.send({ message: 'Successfully Registered' })
//         }
//       })
//     }
//   })
// })

// Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: "user", // Default role is always "user"
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
});




//  ------------ get data of user by admin controller-----------
// router.get('/getuser', async (req, res) => {
//   try {
//     const data = await User.find({}).lean().exec()
//     res.status(200).json(data)
//   } catch (error) {
//     console.log(error)
//   }
// })

router.get("/getuser", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is an admin
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    // Fetch all users
    const data = await User.find({}).lean().exec();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error verifying token:", error.message);
    res.status(400).json({ message: "Invalid token." });
  }
});


//  ------------delete user by admin controller-----------

// router.delete('/:id',async (req, res) => {
//   User.deleteOne({_id:req.params.id}).then(()=>{
//    res.send("user deleted")
//   }).catch((err) => {
//    res.send("An error Occured")
//   })
// })

router.delete("/:id", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is an admin
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    // Delete the user
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error verifying token:", error.message);
    res.status(400).json({ message: "Invalid token." });
  }
});

// Promote a user to admin
router.patch("/:id/promote", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is an admin
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    // Promote the user to admin
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { role: "admin" }, // Update the role to "admin"
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User promoted to admin", user: updatedUser });
  } catch (error) {
    console.error("Error promoting user:", error.message);
    res.status(500).json({ message: "Error promoting user", error });
  }
});




module.exports = router