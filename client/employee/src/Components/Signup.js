import React,{ useState}  from 'react'
import { Form,Input,Button,Label,FormGroup,Col,Row} from 'reactstrap';
import axios from 'axios'
const Signup = ()=>{ 
//useStates//
const [FirstName,setFname] = useState(" ");
const [LastName,setLname] = useState(" ");
const [Gender,setGen] = useState(" ");
const [Email,setEmail] = useState(" ");
const [Password,setPass] = useState("");
const [Mobile,setMob] = useState();
const [Designation,setDes] = useState(" ");
const [DateOfJoining,setJd] = useState(" ");
const [ReportingManager,setRm] = useState("");
const [Location,setLoc] = useState(" ");
const [City,setCity] = useState(" ");
const [State,setState] = useState(" ");
const [EmployeeCode,setEid] = useState();
const [Country,setCountry] = useState("");
const [Salary,setSal] = useState(0);
//const [Department,setDept] = useState("");
const url = "/"

const handleInputs = async (e)=>{
  e.preventDefault();
  window.alert("got your data! hahahaa")
  try{
    const res = await axios.post(url,{FirstName,LastName,Gender,Email,Password,Mobile,EmployeeCode,Designation,ReportingManager,Location,City,State,Country,Salary});
    console.log(res);
  }
  catch(err)
  {
    console.log(err.response);
  }
 
}

//Fetch api to inset data in db
const PostData = async (e)=>{
  e.preventDefault();
  
}

    return(
        <div className='form' style={{margin:"20px"}}>
<Form method='post'>
  <Row>
    <Col md={4} sm={5}>
      <FormGroup>
        <Label for="Fname">
          First Name
        </Label>
        <Input
          id="firstName"
          name="Fname"
          placeholder=" e.g: Abhishek"
          type="text"
          onChange={(e)=>setFname(e.target.value)}
          value={FirstName}
        />
      </FormGroup>
    </Col>
    <Col md={4} sm={5}>
      <FormGroup>
        <Label for="Lname">
          Last Name
        </Label>
        <Input
          id="Lname"
          name="Lname"
          placeholder="e.g: Kumar"
          type="text"
          onChange={(e)=>setLname(e.target.value)}
          value={LastName}
        />
      </FormGroup>
    </Col>

    <Col md={4}>
      <FormGroup>
        <Label for="gen">
          Gender
        </Label>
        <Input
          id="gen"
          name="gen"
          placeholder="e.g: Male, Female"
          type="text"
          onChange={(e)=>setGen(e.target.value)}
          value={Gender}
        />
      </FormGroup>
    </Col>
  </Row>
<Row>
<Col md={4}>
  <FormGroup>
    <Label for="email">
      Email
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="e.g: hellocoder@gmail.com"
      onChange={(e)=>setEmail(e.target.value)}
      value={Email}
    />
    </FormGroup>
    </Col>
    
    <Col md={4}>
    <Label for="pass">
      Password
    </Label>
    <Input
      id="pass"
      name="pass"
      placeholder="Don't show anyone"
      type="password"
      onChange={(e)=>setPass(e.target.value)}
      value={Password}
    />
    </Col>

    <Col md={4}>
    <Label for="mob">
      Mobile
    </Label>
    <Input
      id="mob"
      name="mob"
      placeholder="+91 123456789"
      type="number"
      onChange={(e)=>setMob(e.target.value)}
      value={Mobile}
    />
    </Col>

  </Row>

  {/* Office Detail */}

  <Row>
    <Col md={2}>

    <Label for="des">
      Designation
    </Label>
    <Input
      id="des"
      name="des"
      placeholder="e.g: SDE, HR"
      type="text"
      onChange={(e)=>setDes(e.target.value)}
      value={Designation}
    />
    </Col>

    <Col md={3}>

<Label for="jd">
  Joining Date
</Label>
<Input
  id="jd"
  name="jd"
  placeholder="Select Date"
  type="Date"
  onChange={(e)=>setJd(e.target.value)}
  value={DateOfJoining}
/>
</Col>

<Col md={3}>

<Label for="rm">
  Reporting Manager
</Label>
<Input
  id="rm"
  name="rm"
  placeholder="Manager Name"
  type="text"
  onChange={(e)=>setRm(e.target.value)}
  value={ReportingManager}
/>
</Col>

<Col md={2}>

<Label for="sal">
  Salary
</Label>
<Input
  id="sal"
  name="sal"
  placeholder="e.g: 48000"
  type="Number"
  onChange={(e)=>setSal(e.target.value)}
  value={Salary}
/>
</Col>
<Col md={2}>

<Label for="eid">
  Emp id
</Label>
<Input
  id="eid"
  name="eid"
  placeholder="e.g: 4845"
  type="Number"
  onChange ={(e)=> setEid(e.target.value)}
  value={EmployeeCode}
/>
</Col>
  </Row>

{/* Location */}
 <br/>
  <Row>
  <Col md={4}>
      <FormGroup>
        <Label for="loc">
          Location
        </Label>
        <Input
          id="loc"
          name="loc"
          onChange={(e)=>setLoc(e.target.value)}
          value={Location}
        />
      </FormGroup>
    </Col>

    <Col md={4}>
      <FormGroup>
        <Label for="city">
          City
        </Label>
        <Input
          id="city"
          name="city"
          onChange={(e)=>setCity(e.target.value)}
          value={City}
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="state">
          State
        </Label>
        <Input
          id="state"
          name="state"
          onChange={(e)=>setState(e.target.value)}
          value={State}
        />
      </FormGroup>
    </Col>
    <Col md={2}>
      <FormGroup>
        <Label for="country">
          Country
        </Label>
        <Input
          id="country"
          name="country"
          placeholder='eg: India'
          onChange={(e)=>setCountry(e.target.value)}
          value={Country}
        />
      </FormGroup>
    </Col>
  </Row>

  <Button onClick={handleInputs}>
    Submit
  </Button>
</Form>
   
   </div>

    )
}
export default Signup;
