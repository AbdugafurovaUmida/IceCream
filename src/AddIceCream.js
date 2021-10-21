import { useState } from "react"


const AddIceCream = () => {

    const [image,setImage] = useState('');
    const [name,setName] = useState('');
    const [quantity,setQuantity] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        
        // const newObj = {
        //     image,
        //     name,
        //     quantity,
        //     description
        // };

        const newObj = {
            iceCream: {
                id: image,
                name
            },
            inStock: true,
            quantity,
            price: 1.51,
            description
        };

        console.log(newObj);

          // Postni serverga joylash
        fetch('http://localhost:8000/menuData',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newObj)
        }).then(response => {
            console.log('post qo`shildi');

            setImage('');
            setName('');
            setQuantity('');
            setDescription('');
            setPrice('');
        });

        
    };

    return(
        <div className='content'>
            <div className='container'>
                <h2>Add Ice Cream</h2>
                <form className='form-input' onSubmit={handleSubmit}>
                    <label for="input__image">Choose Image</label>
                    <input type='number' id='input__image' value={image} onChange={(e) => {setImage(e.target.value)}} />
                    <label for="input__name">Choose IceCream Name</label>
                    <input type='text' id='input__name' value={name} onChange={(e) => {setName(e.target.value)}}/>
                    <label for="input__quantity">Choose quantity</label>
                    <input type='text' id='input__quantity' value={quantity} onChange={(e) => {setQuantity(e.target.value)}}/>
                    <label for="input__description">Choose Description</label>
                    <input type='text' id='input__description' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                    <label for="input__price">Choose Description</label>
                    <input type='text' id='input__price' value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                    <button type='submit'>Add Ice Cream</button>
                </form>
            </div>
        </div>  
    )
  
}

export default AddIceCream;