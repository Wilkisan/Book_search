import React, {useState} from 'react'
import {Card, CardTitle, CardImg, CardBody, Button, Modal} from 'reactstrap'


const BookCard = ({
    thumbnail,
    title,
    pageCount,
    language,
    author,
    publisher,
    description,
    previewLink,
    infoLink 
}) => {   
    const [modal, setModal] = useState(false);
    const toggle = () => {

        // dispatch(SEARCH_EVENT);
        // if key == '13'
        // window.addListener('key...', (event) => { // if key == '13' && document.getElementById('search').focus })
        setModal(!modal);
    }

    return (
        <Card style={ {width: '233px'} } className='m-auto'>
            <CardImg 
                top 
                style={{width: '100%', height: '233px'} } 
                src={thumbnail} 
                alt={ title } 
            />
            <CardBody>
                <CardTitle className='card-title'>{ title }</CardTitle>
                <Button onClick={(event) => toggle(event, '...')}>Больше информации</Button>
            </CardBody>

            <Modal isOpen={ modal } toggle={ toggle }>
                <div className='modal-header d-flex justify-content-center'>
                    <h5 className='modal-title text-center' id='exampleModalLabel'>{ title }</h5>
                   
                </div>
                <div className="d-flex justify-content-start ml-3">
                    <img src={ thumbnail } alt={ title } style={ { height: '223px' } }/>
                    <div className='ml-3'>
                        <p>Страницы: { pageCount }</p>
                        <p>Язык: { language }</p>
                        <p>Автор: { author }</p>
                        <p>Publisher: { publisher }</p>
                    </div>
                </div>
                <div className='mt-3 mr-3 ml-3 mb-3'>{description}</div>
                <div className='modal-footer'>
                     <div className="left-silde">
                         <a 
                            href={previewLink} 
                            className='btn-link' 
                            color='default' 
                            type='button' 
                            target='_blank' 
                            rel='noopener noreferrer'>
                             Информация
                        </a>
                     </div>
                     <div className='divider'>
                     <div className="right-silde">
                         <a 
                            href={infoLink} 
                            className='btn-link' 
                            color='default' 
                            type='button' 
                            target='_blank' 
                            rel='noopener noreferrer'>
                             КУПИТЬ
                        </a>
                     </div>
                     </div>
                </div>
            </Modal>
            
            </Card>
    )
}

    

    export default BookCard;