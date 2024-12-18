import HeaderContent from '../HeaderContent/HeaderContent'
import Nav from '../Nav/Nav'
export default function Header(){
    return(
        <div className="header">
            <Nav/>
            <HeaderContent/>
        </div>
        
    )
}