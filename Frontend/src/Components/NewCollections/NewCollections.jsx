import React from 'react'
import "./style.scss"
import Container from '../Container/Container'
import new_collections from '../../Assets/Data/new_collections'
import Item from '../../Components/Item/Item'


const NewCollections = () => {
    return (
        <section className="sectionNewCollections">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <h2>New Collections</h2>
                    </div>
                    {
                        new_collections.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                    <Item item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

export default NewCollections