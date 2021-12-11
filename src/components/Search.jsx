/* eslint-disable array-callback-return */
import React, {useState} from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Input, InputGroupAddon, Button, Spinner, Alert } from 'reactstrap';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {BookCard, Categories}  from '../components';


function Search() {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [card, setCard] = useState([]);
    const [allItems, setAllItems] = useState('')
    const [sort, setSort] = useState('')
    const handleSubmit = (e) => {
        if(e.key === 'Enter') {
        e.preventDefault();
        setLoading(true)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=30`)
        .then(res => {
            console.log(res)
            if(allItems < 0) {
                toast.error('Попробуйте изменить поисковый запрос!')
            }else {
                if(res.data.items.length > 0) {
                    setCard(cleanData(res))
                    setAllItems(res.data.totalItems)
                    setLoading(false)
                }
            }
        }).catch(err => {
            setLoading(false) 
            toast.error(`Попробуйте изменить поисковый запрос! ${err}`)
        })}
    }
    const searchForm = () => {
        return (
            <div className="main-image d-flex justify-content-center align-items-center ">
                <div style={{ width: '40%'}}>
                    <InputGroup size='sm' className='mb-3 mt-3' onKeyPress={handleSubmit} >
                        <Input
                            placeholder='Введите тему или название книги'
                            value={query}
                            onChange={ e => setQuery(e.target.value)}
                            
                        />
                        <InputGroupAddon className='input__group' addonType='append'>
                        <Button  size='lg' color='secondary' onClick={handleSubmit}>
						<i className='fas fa-search'></i>
					    </Button>
                        </InputGroupAddon>
                    </InputGroup>
                    <div className='sort__btn'>
                       <Categories />
                       <select className='selrect__sort' defaultValue="Sort" onChange={handleSort}>
                        <option disabled value="Sort">
                            Сортировка
                        </option>
                        <option value={{name: 'newest', type: 'SET_SORT_AGE'}}>Новые</option>
                        <option value={{name: 'oldest', type: 'SET_SORT_AGE'}}>Старые</option>
                    </select>
                    </div>
                    <Alert className='alert' color="primary">Найдено:  {allItems} материалов</Alert>
                </div>
            </div>
        )}
    const handleCard = () => {

        const items = card.map((item, i) => {
            let thumbnail = '';
            if(item.volumeInfo.imageLinks === undefined) {
                thumbnail = ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU')
            } else if (item.volumeInfo.imageLinks.thumbnail)(
                thumbnail = item.volumeInfo.imageLinks.thumbnail
                )
            return (
                <div className='col-lg-4 mb-3'>
                    <BookCard 
                        thumbnail={thumbnail}
                        title={ item.volumeInfo.title }
						pageCount={ item.volumeInfo.pageCount }
						language={ item.volumeInfo.language }
						author={ item.volumeInfo.author }
						publisher={ item.volumeInfo.publisher }
						description={ item.volumeInfo.description }
						previewLink={ item.volumeInfo.previewLink }
						infoLink={ item.volumeInfo.infoLink }
                    />
                </div>
            )
        })
        if(loading) {
            return(
                <div className='d-flex justify-content-center mt-3'>
                    <Spinner style={{width: '3rem', height: '3rem'}} />
                </div>
            )
        }else {
            return(
                <div className='container my-5'>
                    <div className='row'>{items}</div>
                </div>
            )
        }
    }
    const handleSort = (e) => {
        console.log((e.target.value).name)
        setSort(e.target.value.type);
	};

    const cleanData = (res) => {
        const cleanedData = res.data.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            }

            return book;
        })

        return cleanedData;
        
    }
    
    /* const sortedBooks = card.sort((a, b) => {
        if (sort === 'Newest') {
            console.log(sortedBooks)
            return (
                parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
                parseInt(a.volumeInfo.publishedDate.substring(0, 4))
            );
        } else if (sort === 'Oldest') {
            return (
                parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
                parseInt(b.volumeInfo.publishedDate.substring(0, 4))
            );
        }
    });
 */
    
    return (
        <div className='w-100 h-100'>
            {searchForm()}
            {handleCard()}
            {/* {sortedBooks} */}
			<ToastContainer />
        </div>
    )


    
}

export default Search;