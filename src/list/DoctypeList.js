import React,{Component} from 'react';
import Json from "../data/doctype_data.json";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class DoctypeList extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    
    componentDidMount(){
            this.setState({data: Json})
    }

    render(){
        if(!this.state.data){ 
            return (<h1> Wait a moment 0/</h1>);
        }else{
            return (
                <div>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Nb of document</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Json.map((item, index) => {
                  return <TableRow key={item.name}>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">{item.total_docs}</TableCell>
            </TableRow>
        })}
        </TableBody>
        </div>
        );
        }
        }
    }



export default DoctypeList;