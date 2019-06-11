import React,{Component} from 'react';
import Json from "../data/confidentiality_data.json";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
class ConfidentialityList extends Component {

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
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Nb</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Json.map((item, index) => {
                  return <TableRow key={item.name}>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">{item.id}</TableCell>
              <TableCell align="center">{item.total_docs}</TableCell>
            </TableRow>
        })}
        </TableBody>
        </div>
        );
        }
        }
    }



export default ConfidentialityList;