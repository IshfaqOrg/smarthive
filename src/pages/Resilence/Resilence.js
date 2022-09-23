/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
// import Calendar from 'react-calendar';
import {
  ChevronRight,
  Info,
} from 'react-feather';
import {
  Button,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { KeyboardArrowRight } from '@mui/icons-material';
import AreaGraph from '../../components/areaGraph/areaGraph';
import { getDeviceList } from '../../redux/slices/DeviceSlice';
import Gauge from '../../components/amCharts/guage';
import DataTablesReOrder from '../../components/tables/TableColumnReorder';
import {
  getDevicesAtRiskList,
} from '../../redux/slices/deviceAtRiskSlice';

import AssetsInfo from '../../components/assetsInfo/assetsInfo';
import ComponentSpinner from '../../components/Spinner/spinner';
import { scoreTitles } from '../../constants/assetInfo/contants';
import Header from '../Dashboard';
// import AssetTableTagsFilter from '../../components/assetTableTagsFilter/assetTableTagsFilter';
// import { dateFormat } from '../utility/Utils';

function IntegrationResilence() {
  const [viewAll, setViewAll] = useState(false);

  const dateFormat = (date, showHours = false) => {
    if (showHours) {
      return moment(date).format('MM/DD/YYYY hh:mma');
    }
    return moment(date).format('MM/DD/YYYY');
  };

  // redux
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [riskDevicePage, setRiskDevicePage] = useState(1);
  const devices = useSelector((state) => state.getDevices);
  const devicesAtRisk = useSelector((state) => state.devicesAtRisk);
  // const authState = useSelector((state) => state.registeration.authenticate);
  const [deviceType, setDeviceType] = useState('');
  const [gaugeData, setGaugeData] = useState({
    label: 'Company Score',
    value: 0,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  // const [value, onChange] = useState(new Date());
  // eslint-disable-next-line no-unused-vars
  const [finalScore, setFinalScore] = useState(0);
  useEffect(() => {
    if (deviceType) {
      if (riskDevicePage === 1) {
        dispatch(getDevicesAtRiskList({ type: deviceType, page: 1 }));
      } else {
        setRiskDevicePage(1);
      }
      // dispatch(getDevicesAtRiskFull());
    }
  }, [deviceType]);
  useEffect(() => {
    if (riskDevicePage && deviceType) {
      dispatch(
        getDevicesAtRiskList({ type: deviceType, page: riskDevicePage }),
      );
      // dispatch(getDevicesAtRiskFull());
    }
  }, [riskDevicePage]);
  useEffect(() => {
    dispatch(getDeviceList({ page, size: 5 }));

    // dispatch(getDevicesAtRiskFull());
  }, [page]);
  useEffect(() => {
    setGaugeData({
      label: 'Company Score',
      value: devices?.response?.companyAvgScore,
    });
    if (devices?.response?.data) {
      setDeviceType(devices.response.data[0].deviceType);
    }
  }, [devices]);
  const conditionalRowStyles = [
    {
      when: (row) => !viewAll && row?.deviceType === deviceType,
      style: {
        backgroundColor: '#25292D !important',
        borderRadius: '5px',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  ];

  // useEffect(() => {
  //   if (authState.isLoggedIn === false) {
  //     navigate('/login');
  //   }
  // }, [authState]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const reOrderColumns = [
    {
      name: 'DEVICE TYPE',
      reorder: true,
      sortable: true,
      minWidth: '50px',
      // selector: (row) => row._id?.charAt(0).toUpperCase() + row._id?.slice("1"),
      selector: (row) => row?.deviceType,
    },
    {
      name: 'ASSETS COUNT',
      reorder: true,
      sortable: true,
      minWidth: '50px',
      selector: (row) => row?.count,
    },
    {
      name: 'ASSETS AT RISK',
      reorder: true,
      sortable: true,
      minWidth: '50px',
      selector: (row) => row?.deviceAtRisk,
    },
    {
      name: 'AVERAGE SCORE',
      reorder: true,
      sortable: true,
      // padding:"10px",
      minWidth: '50px',
      selector: (row) => row?.avgScore,
    },
  ];

  const riskColumn = [
    {
      name: 'DEVICE NAME',
      reorder: true,
      sortable: true,
      minWidth: '50px',
      selector: (row, index) => (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, react/jsx-filename-extension
        <div
          style={{ fontSize: 14 }}
          id={index}
          onClick={() => {
            toggleModal();
          }}
        >
          {row.asset_name}
        </div>
      ),
    },
    {
      name: 'SOURCE',
      reorder: true,
      sortable: true,
      minWidth: '50px',
      selector: (row) => scoreTitles[row.risk_source],
    },
    {
      name: 'CURRENT SCORE',
      reorder: true,
      sortable: true,
      minWidth: '50px',
      selector: (row) => row.total_risk_score,
    },
    {
      name: 'TIME DETECTED',
      reorder: true,
      sortable: true,
      minWidth: '50px',
      selector: (row) => dateFormat(row.updatedAt, true),
      // getTimeFromNow(row.updatedAt)
      // row.supportEnd
      //   ? row.supportEnd
      //   : row.firmwareLatest
      //   ? row.firmwareLatest
      //   : row.firmwareLow
      //   ? row.firmwareLow
      //   : "-",
    },
    {
      name: 'IMPACT ON SCORE',
      reorder: true,
      sortable: true,
      minWidth: '50px',
      selector: (row) => row.impact_score,
      // row.supportEnd
      //   ? 850 - row.supportEnd
      //   : row.firmwareLatest
      //   ? 850 - row.firmwareLatest
      //   : row.firmwareLow
      //   ? 850 - row.firmwareLow
      //   : "-",
    },
  ];

  const handleDeviceInfo = (obj) => {
    setViewAll(false);
    // eslint-disable-next-line no-underscore-dangle
    setDeviceType(obj?._id);
  };

  // const addToggle=()=>{
  //   console.log("addToggle")
  // }

  return (
    <Header>
      <div className="h-full w-full flex ">
        <div className="w-full flex flex-col justify-center px-3 ">

          <div className="graph-heading pl-2 py-4 font-body text-[#b4b7bd] font-semibold"> Overview </div>
          {/* <button onClick={()=>{
          console.log("button")
          setIsOpen(true)
        }}>Open Asset Info</button> */}
          <div className="w-full flex justify-between gap-x-8">
            <div className="w-full p-6 total-assets">
              <p className="graph-title mb-0 font-body">
                TOTAL ASSETS
              </p>
              <div className="count-number">
                {devices?.response?.totalAssets || 0}
                {/* {
                devices.response?.data?.reduce(
                          (a, b) => a + b.total,
                          0
                        ) ||
                        0} */}
              </div>
              <div md={3}>
                {/* <div><Badge color='light-danger'>1.8%</Badge></div> */}
              </div>

            </div>

            <div className="w-full p-6 total-assets">

              <p className="graph-title mb-0 flex font-body">
                ENDPOINTS
                <span />
              </p>
              <div className="count-number ">
                {devices.response?.endpoint || 0}
              </div>
              <div md={3}>
                {/* <div><Badge color='light-danger'>1.8%</Badge></div> */}
              </div>

            </div>

            <div className="w-full p-6 total-assets">

              <p className="graph-title mb-0 flex font-body">
                ASSETS AT RISK
                <span />
              </p>
              <div className="count-number ">
                {devices.response?.assertAtRisk || 0}
              </div>
              <div md={3}>
                {/* <div><Badge color='light-success'>2.1%</Badge></div> */}
              </div>

            </div>

            <div className="w-full p-6 total-assets">

              <p className="graph-title mb-0 flex font-body">
                UNKNOWN ASSETS
                <span />
              </p>
              <div className="count-number  flex justify-between">
                {devices.response?.unknownAssets || 0}
              </div>
              <div md={3}>
                {/* <div><Badge color='light-success'>2.1%</Badge></div> */}
              </div>
            </div>
          </div>

          <div className="flex mt-9 gap-x-8">
            <div xl={7} lg={6} md={12} className="flex flex-col gap-y-2 w-3/5 ">
              <div className="flex justify-between">
                <div md={6}>
                  <div className="graph-heading py-1">
                    Total Devices &nbsp;
                    <span className="text-success text-green-500 font-weight-bolder">
                      {/* ({staticData.length}) */}
                      (
                      {devices?.response?.totalAssets || 0}
                      )
                    </span>
                    {/* {devices.response?.datadummy?.reduce((a, b) => a + b.total, 0) ||
                    0} */}
                  </div>
                </div>
                <div md={6}>
                  {/* <PaginationBasic itemsPerPage={4}/> */}
                  <Link to="/assets">
                    <Button className="view-all-button themeButton">
                      View All
                      <KeyboardArrowRight sx={{ fontSize: '1pc' }} />
                    </Button>
                  </Link>

                </div>
              </div>
              <div className="total-assets !h-full">
                {/* <DeviceTable itemsPerPage={5}/> */}
                {devices.loading ? (
                  <div className="h-full">
                    <ComponentSpinner />
                  </div>
                ) : (
                  <DataTablesReOrder
                    handleDeviceInfo={handleDeviceInfo}
                    columns={reOrderColumns}
                    conditionalRowStyles={conditionalRowStyles}
                    data={devices.response}
                    page={page}
                    setPage={setPage}
                  />
                )}
              </div>
            </div>
            <div xl={5} lg={6} className="w-2/5 flex flex-col gap-y-2">
              <div className="graph-heading pl-1 py-1">
                {gaugeData.label}
              </div>
              <div className="total-assets p-5 flex flex-col">
                <div className="pr-0 flex justify-between">
                  <div md={4}>
                    <p className="graph-title !text-sm">{gaugeData.label}</p>
                    <div className="ring-number">
                      {/* {Math.round(finalScore || 0)}/850 */}
                      {Math.round(gaugeData.value || 0)}
                      /850
                    </div>
                  </div>
                  <div md={8}>
                    <div className="d-flex flex-direction-row">
                      <Button
                        onClick={() => setGaugeData({
                          label: 'Company Score',
                          value: devices?.response?.companyAvgScore,
                        })}
                            // color="primary"
                        className={`mr-1 gauge_btn ${gaugeData.label === 'Company Score'
                      && 'active-btn'
                        }`}
                      >
                        <span className="d-sm-inline-block ml-sm-25 ">
                          Company Score
                        </span>
                      </Button>
                      <Button
                        onClick={() => setGaugeData({
                          label: 'Average score',
                          value: devices?.response?.avgScore,
                        })}
                      // color="primary"
                        className={`mr-1 gauge_btn ${gaugeData.label === 'Average score'
                              && 'active-btn'
                        }`}
                      >
                        <span className="d-sm-inline-block ml-sm-25 ">
                          Average score
                        </span>
                      </Button>
                      <Button
                        onClick={() => setGaugeData({
                          label: 'Peer score',
                          value: devices?.response?.peerScore,
                        })}
                            // color="primary"
                        className={` gauge_btn ${gaugeData.label === 'Peer score' && 'active-btn'
                        }`}
                      >
                        <span className="align-middle d-sm-inline-block ml-sm-25 ">
                          Peer score
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    {/* {Math.round(finalScore || 0) > 0 &&  */}
                    <Gauge score={gaugeData.value} />
                    {/* } */}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ////// */}
          <div xl={7} lg={6} md={12} className="flex flex-col gap-y-4 w-full mt-8">
            <div className="flex justify-between">
              <div className="graph-heading pl-1 py-1"> Risk Detected </div>

              <div className="ml-auto mr-3 ">
                <h5
                  className="view-all-button themeButton flex"
                  onClick={() => {
                    if (deviceType !== 'All') {
                      setDeviceType('All');
                    } else {
                      setDeviceType(devices.response.data[0].deviceType);
                    }
                  }}
                >
                  {deviceType === 'All' ? <>View less</> : <>View all</>}
                  <span>
                    <ChevronRight size={14} color="#747A80" />
                  </span>
                </h5>
              </div>
            </div>

            <div className="mb-4 total-assets p-6">
              <div className="flex">
                <div className="flex flex-col w-1/3">
                  <div className="flex">
                    <div className="flex flex-col w-80 ">
                      <p className="graph-title mb-0 !text-base !tracking-normal">YOUR CURRENT SCORE</p>
                      <div className="count-number-chart text-right">
                        {Math.round(finalScore) || 0}
                        /850
                      </div>
                    </div>

                    <div>
                      <div md={3}>
                        <div className="flex items-end">
                          <p className="badge">0.6%</p>
                          <Info color="white" size={14} />
                        </div>
                      </div>
                    </div>

                  </div>
                  <AreaGraph />
                </div>
                <div className="w-2/3">
                  {/* <RiskDetected/> */}
                  <div className="risk-detected">
                    {devicesAtRisk.loading ? (
                      <div className="h-100">
                        <ComponentSpinner />
                      </div>
                    ) : (
                      <DataTablesReOrder
                        handleDeviceInfo={(data) => {
                          setModalData(data);
                          toggleModal();
                        }}
                        columns={riskColumn}
                        conditionalRowStyles={conditionalRowStyles}
                        data={devicesAtRisk.response}
                        page={riskDevicePage}
                        setPage={setRiskDevicePage}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Row>
          <Col md={2} className="mt-auto mb-auto">
          <div className="graph-heading pl-1 py-1"> Backup </div>
          </Col>
          <Col md={10}>
            <div className=" d-flex flex-direction-row pl-1 py-1">
              <span className="dot1 px-1">You</span>
              <span className="dot2 px-1">Peer</span>
              <span className="dot3 px-1">Hive</span>
              <h5 className="view-more">
                <span>
                <Clock size={14} color="#747A80" /> This Month{" "}
                  <span>
                    <ChevronDown size={14} color="#747A80" />
                    </span>
                    </span>
              </h5>
            </div>
          </Col>
        </Row> */}
          {/* <Row>
          <Col md={5}>
            <Card>
              <CardBody>
                <Calendar
                  className="backup-calendar"
                  onChange={onChange}
                  value={value}
                />
              </CardBody>
            </Card>
            </Col>
        </Row> */}
          {isOpen && (
          <AssetsInfo
            isOpen={isOpen}
            toggleModal={toggleModal}
            deviceType={deviceType}
            modalData={modalData}
          />
          )}
        </div>
      </div>
    </Header>
  );
}

export default IntegrationResilence;
