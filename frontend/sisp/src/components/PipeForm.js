import React, {Component} from 'react';
import {Row, Col, Form, Input, Label, Button, FormGroup} from 'reactstrap';
import {CheckCircle, TrashFill} from 'react-bootstrap-icons';


class PipeForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            drillDiameter: '',
            startMd: '',
            endMd: '',
            startTvd: '',
            endTvd: '',

        }
        this.onChange  = this.onChange.bind(this);
        this.saveData = this.saveData.bind(this);
    }
    onChange(e){
        let name = e.target.name;
        let value = e.target.value

        this.setState({
            [name]: value,
        });
        console.log(this.state);
     }

    saveData(e){
        e.preventDefault();
        
        
     }

    render(){

        return (      
            <div>
                <Row>                   
                    <Col xs="3"></Col>
                    <Col xs="6">
                        <h2>Actualizar grafica de estado mecánico</h2>
                        <Form onSubmit={this.saveData}>
                            <Label>Etapa</Label>
                            <Input type="select" name="drillDiameter" value={this.state.drillDiameter} onChange={this.onChange}>
                                <option value="20">20"</option>
                                <option value="13 3/8">13 3/8"</option>
                                <option value="9 5/8">9 5/8"</option>
                                <option value="7">7"</option>
                            </Input>

                            <Label>Inicio Md</Label>
                            <Input type="text" name="startMd" value={this.state.startMd} onChange={this.onChange}/>

                            <Label>Fin Md</Label>
                            <Input type="text" name="endMd" value={this.state.endMd} onChange={this.onChange}/>

                            <Label>Inicio Tvd</Label>
                            <Input type="text" name="startTvd" value= {this.state.startTvd} onChange={this.onChange}/>

                            <Label>Fin Tvd</Label>
                            <Input type="text" name="endTvd" value={this.state.endTvd} onChange={this.onChange}/>


                            <FormGroup>
                                <Label>Acciones</Label>
                                <Button> <CheckCircle color="gray"></CheckCircle> </Button>
                                <Button> <TrashFill color="gray"></TrashFill> </Button>
                                
                            </FormGroup>
                            
                        </Form> 
                    </Col>
                    
                </Row>
            </div>
        );
    }
}

export default PipeForm;
