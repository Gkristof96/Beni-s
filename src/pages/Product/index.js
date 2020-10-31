import React, { useState, useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Partners from '../../components/Partners/index'
import { GoPrimitiveDot } from 'react-icons/go'
import CartContext from '../../contexts/cartContext'

const Product = () => {
    const [step,setStep] = useState(1)
    const [count, setCount] = useState(1)
    const {addItem} = useContext(CartContext)
    const [product,setProduct] = useState({})
    const { id } = useParams();

    async function fetchProduct() {
        await axios
          .get("../data/products.json")
          .then((response) => {
            setProduct(response.data[id]);
          })
          .catch((error) => console.log(error));
    }
    useEffect(() => {
        fetchProduct();
        // eslint-disable-next-line
     }, []);
    return (
        <>
            <section className='product-section'>
                <div className='product-container'>
                    <div className='image-wrapper'>
                        <img src={`../${product.image}`} alt={product.name} />
                        <div className='pager'>
                            <GoPrimitiveDot />
                            <GoPrimitiveDot />
                            <GoPrimitiveDot />
                        </div>
                    </div>
                    <div className='info-wrapper'>
                        <div className='new-tag'>új!</div>
                        <h1 className='product-title'>{product.name}</h1>
                        <p className='small-desc'>Aenean viverra libero sit amet erat pulvinar dapibus. Fusce eros tellus, 
                        consequat vitae risus nec, pulvinar placerat turpis, Vivamus varius lacus blandit nisl tempus.</p>
                        
                        <div className='prices'>
                            <h2 className='discont'>{product.discontedprice} Ft/db</h2>
                            <h2 className='full'>{product.price} Ft/db</h2>
                        </div>

                        <div className='basket-count'>
                            <input type="number" value={count} onChange={(e) => setCount(e.target.value)}/>
                            <span>db</span>
                        </div>
                        
                        <button className='btn' onClick={() => addItem(product,count)}>kosárba rakom</button>
                    </div>
                    <div className='text-wrapper'>
                        <ul>
                            <li 
                                className={`${step === 1 && 'active'}`} 
                                onClick={() => setStep(1)}>leírás
                            </li>
                            <li 
                                className={`${step === 2 && 'active'}`} 
                                onClick={() => setStep(2)}>összetevők
                            </li>
                        </ul>
                        <div className='description-wrapper'>
                            <p>
                                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Proin eget nisi ac mi cursus venenatis. Duis iaculis purus eu tristique iaculis. Sed eget libero pulvinar, 
                                tincidunt magna nec, efficitur ligula. In nec augue vel nunc molestie pretium. 
                                Phasellus id elit ac leo tincidunt ullamcorper et in justo. Integer sed mi nisl. 
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                                Nam ac commodo eros. Aenean ultricies ligula turpis, eget facilisis leo facilisis eget. 
                                Cras consequat turpis quis diam dignissim, eu malesuada sapien semper. Quisque eu purus eros. 
                                Suspendisse vitae cursus augue, vitae facilisis neque. Morbi turpis augue, aliquam eu pulvinar ac, 
                                pulvinar at metus. Proin auctor convallis vulputate. Maecenas eget tempus arcu. 
                                Etiam feugiat augue ac risus interdum vulputate et eu erat. Vivamus eleifend pharetra libero ac cursus. 
                                Nunc a justo orci. Donec consectetur ultricies lorem, tincidunt mattis nisi tempor cursus. 
                                Nullam a lacus ex. Donec libero arcu, malesuada in nibh id, blandit ornare tortor. 
                                Nullam sapien est, lacinia at ultricies ut, vulputate ac velit. Donec ullamcorper, 
                                eros et faucibus fringilla, ligula ipsum blandit lorem, eu fringilla nibh massa at magna.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Partners />
        </>
    )
}

export default Product
