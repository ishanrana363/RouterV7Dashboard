import { BrowserRouter, Route, Routes } from 'react-router'

import AdminLayout from '../Layout/AdminLayout';

const BasicRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    
                    <Route path='/dashboard' element={<AdminLayout></AdminLayout>} >
                        <Route path='' element = { <h1>HomePage</h1> }/>
                        <Route path='about' element = { <h1>About Page</h1> }/>
                        <Route path='contact' element = { <h1>Contact Pate</h1> }/>
                        <Route path='skill' element = { <h1>Skill Page</h1> }/>

                    </Route>


                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default BasicRouter
