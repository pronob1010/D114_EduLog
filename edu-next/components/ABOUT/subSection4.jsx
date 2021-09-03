export default function SubSection4() {
  return (
    <>
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">FAQ</h1>
    <p className="lead">This is a Sample FAQ page.</p>
  </div>
</div>

  <br></br>
  <div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingOne">
            <h4 className="panel-title">
              <a dataToggle="collapse" dataParent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is Data Structure?
              </a>
            </h4>

          </div>
          <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div className="panel-body">Data structure is a fundamental concept of any programming language, essential for algorithmic design.
  </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingTwo">
            <h4 className="panel-title">
              <a className="collapsed" dataToggle="collapse" dataParent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Benefits of Learning Data Structures
              </a>
            </h4>

          </div>
          <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div className="panel-body">Any given problem has constraints on how fast the problem should be solved (time) and how much less resources the problem consumes(space). That is, a problem is constrained by the space and time complexity within which it has to be solved efficiently.
  </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingThree">
            <h4 className="panel-title">
              <a className="collapsed" dataToggle="collapse" dataParent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                What is an array?
              </a>
            </h4>

          </div>
          <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <div className="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}
