import React, {Component, Fragment} from 'react'
import {
  Container,
  SubHeader,
  Search,
  Row,
  RefreshButton,
} from '../dumb/styledComponent/dashboard'
import {TextNum, Loader} from '../dumb/styledComponent/shared'
import {CircleLoader} from 'react-spinners'

export class DashBoard extends Component {
  state = {
    //initialise the values
    loading: false,
    loadingRefresh: false,
  }

  callAxios = ({loader} = {loader: 'loading'}) => {
    this.setState({[loader]: true})
    //TODO
  }

  refresh = () => {
    this.callAxios({
      loader: 'loadingRefresh',
    })
  }

  getData = () => {
    this.callAxios({loader: 'loading'})
  }

  handleInput = () => {}
  //TODO handle the changes

  getFilterdCryptos = () => {}
  //TODO get the cryptoCurrency filtered by the input value

  componentDidMount() {
    //initialise the call when the component mount (get the data)
    const interval = setInterval(() => this.refresh(), 300000)
    this.setState({interval})
  }
  componentWillUnmount() {
    //Clear the interval to avoid any memory leak
  }
  render() {
    //TODO fetch props and state
    //TODO get Filtered values
    const filteredCryptos = []
    const metadata = {}
    const loadingRefresh = false
    const loading = true
    return (
      <Fragment>
        <Container>
          <SubHeader>
            <Row>
              <RefreshButton onClick={() => alert('Hello there')}>
                {/*Does this refresh ?*/}
                Refresh
              </RefreshButton>
              <TextNum>
                {filteredCryptos && filteredCryptos.length} /{' '}
                {metadata.num_cryptocurrencies}{' '}
              </TextNum>
              {loadingRefresh && (
                <CircleLoader color={'#673ab7'} loading={loadingRefresh} />
              )}
            </Row>
            <Search
              type="text"
              placeholder="Search"
              onChange={this.handleInput()}
            />
          </SubHeader>

          {loading ? (
            <Loader>
              <CircleLoader color={'#673ab7'} loading={loading} />
            </Loader>
          ) : (
            <div />
          )}
        </Container>
        {/*Call the List component and pass the cryptos as a prop*/}
      </Fragment>
    )
  }
}
