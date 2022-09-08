import React, { useEffect, useState } from 'react';
import {
  Modal, ModalHeader, ModalBody, Card, CardBody, Col,
} from 'reactstrap';
import moment from 'moment';
import lifecycle from '../../assets/images/assets/lifecycle.png';
import endpoint from '../../assets/images/assets/end_point.png';
import patching from '../../assets/images/assets/patching.png';
import realtime from '../../assets/images/assets/time.png';
import backup from '../../assets/images/assets/backup.png';
import GaugeNew from '../amchartsNew/gauge';
// import { server, workstation } from '../../utility/popupData';
import axiosInstance from '../../services/utils/axios';
// import ComponentSpinner from '../../@core/components/spinner/Loading-spinner';
import ComponentSpinner from '../Spinner/spinner';
import { assertsTypes, scoreTitles } from '../../constants/assetInfo/contants';

function AssetsInfo({
  isOpen, toggleModal, deviceType, modalData,
}) {
  const [infoData, setInfoData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const cards = [
    { iconSrc: patching, title: 'PATCHING' },
    { iconSrc: endpoint, title: 'END POINT' },
    { iconSrc: lifecycle, title: 'LIFE CYCLE' },
    { iconSrc: realtime, title: 'REAL TIME' },

  ];
  useEffect(async () => {
    setIsLoading(true);
    const response = await axiosInstance.post(`/device/detail/${modalData.id}`).then((res) => res?.data).catch(() => {
      toggleModal();
    });

    const dateFormat = (date, showHours = false) => {
      if (showHours) {
        return moment(date).format('MM/DD/YYYY hh:mma');
      }
      return moment(date).format('MM/DD/YYYY');
    };
    const data = response?.asset_type === assertsTypes.network ? {
      score: response?.asset_score?.risk_score,
      assetsType: response?.asset_type,
      tableData: response?.asset_at_risks,
      assetDetail: [
        {
          label: 'Machine Name',
          value: response?.asset_name || 'N/A',
        },
        {
          label: 'IP Address',
          value: response?.auvikData?.attributes?.ipAddresses?.length > 0
            ? response?.auvikData?.attributes?.ipAddresses?.map(
              ((item) => `${item}, `),
            ) : 'N/A',
        },

        {
          label: 'Device Added',
          value: 'N/A',
        },
        {
          label: 'Last Seen',
          value: response?.auvikData?.attributes?.lastSeenTime ? dateFormat(response?.auvikData?.attributes?.lastSeenTime, true) : 'N/A',
        },

      ],
      software: [
        {
          label: 'Software version',
          value: response?.auvikData?.attributes?.softwareVersion || 'N/A',
        },
        {
          label: 'Warranty Coverage',
          value: response?.auvikData?.deviceWarranty?.[0]?.attributes?.warrantyCoverageStatus || 'N/A',
        },
        {
          label: 'Last Support',
          value: response?.auvikData?.deviceWarranty?.[0]?.attributes?.warrantyExpirationDate ? dateFormat(response?.auvikData?.deviceWarranty?.[0]?.attributes?.warrantyExpirationDate) : 'N/A',
        },
      ],

      hardware: [
        {
          label: 'Vendor',
          value: response?.auvikData?.attributes?.vendorName || 'N/A',
        },
        {
          label: 'Model',
          value: response?.auvikData?.attributes?.makeModel || 'N/A',
        }, {
          label: 'Serial Number',
          value: response?.auvikData?.attributes?.serialNumber || 'N/A',
        }, {
          label: 'Description',
          value: response?.auvikData?.attributes?.description || 'N/A',
        },
      ],

    } : {
      score: response?.asset_score?.risk_score,
      tableData: response?.asset_at_risks,
      assetsType: response?.asset_type,
      assetDetail: [
        {
          label: 'Machine Name',
          value: response?.asset_name,
        },
        {
          label: 'IP Address',
          value: response?.auvikData?.attributes?.ipAddresses?.length > 0 ? response?.auvikData?.attributes?.ipAddresses?.map(((item) => `${item}, `)) : 'N/A',
        },
        {
          label: 'Work group',
          value: 'N/A',
        },
        {
          label: 'Availibilty Monitoring',
          value: 'N/A',
        },
        {
          label: 'Device Added',
          value: 'N/A',
        },
        {
          label: 'Last Seen',
          value: response?.auvikData?.attributes?.lastSeenTime ? dateFormat(response?.auvikData?.attributes?.lastSeenTime, true) : 'N/A',
        },
        {
          label: 'Last Logged User',
          value: 'N/A',
        },
        {
          label: 'Last Reboot User',
          value: 'N/A',
        },

      ],

      software: [
        {
          label: 'OS Edition',
          value: response?.malwareBytesData?.agent?.os_info.os_platform || 'N/A',
        },
        {
          label: 'OS version',
          value: response?.malwareBytesData?.agent?.os_info.os_version || 'N/A',
        },
        {
          label: 'OS Build',
          value: response?.malwareBytesData?.agent?.os_info.os_architecture || 'N/A',
        },

      ],

      hardware: [
        {
          label: 'Vendor',
          value: response?.auvikData?.attributes?.vendorName || 'N/A',
        },
        {
          label: 'Model',
          value: response?.auvikData?.attributes?.makeModel || 'N/A',
        },
        {
          label: 'Motherboard',
          value: 'N/A',
        },
        {
          label: 'Processor',
          value: 'N/A',
        },
        {
          label: 'Memory',
          value: 'N/A',
        },
        {
          label: 'Video Card',
          value: 'N/A',
        },
        {
          label: 'Sound',
          value: 'N/A',
        },
        {
          label: 'System Drive',
          value: 'N/A',
        },
        {
          label: 'Mac Address',
          value: 'N/A',
        },
      ],
    };
    setInfoData(data);
    setIsLoading(false);
  }, [modalData]);

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModal} centered size="lg" style={{ maxWidth: '1140px', width: '100%' }}>
        <ModalHeader toggle={toggleModal} className="cross" />
        <ModalBody className="bg">
          <div className="model_dialog">
            {isLoading ? (
              <div style={{ height: '500px' }}>
                <ComponentSpinner />
              </div>
            ) : (
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="assets_heading">
                      <h1>{infoData?.assetDetail?.[0].value}</h1>
                      <p>
                        <span />
                        Online
                      </p>
                    </div>
                  </div>
                </div>
                <div className="poup_content_box">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="machine_content">

                        {infoData?.assetDetail?.map((item, key) => (
                          <div key={key} className="row">
                            <div className="machine_content_heading">
                              <h1>{item.label}</h1>
                            </div>
                            <div className="machine_content_detail">
                              <p>{item.value}</p>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        {cards.map((card, key) => (
                          <div key={key} className="col-md-6">
                            <div className={`patch_box ${(['END POINT', 'REAL TIME'].includes(card.title) && infoData.assetsType === assertsTypes.network) && 'disableCard'}`}>
                              {/* <div className='indication'></div> */}
                              <div className="box_icon">
                                <img
                                  alt="box_icon"
                                  src={card.iconSrc}
                                  className=""
                                />
                              </div>
                              <div className="box_heading">{card.title}</div>
                            </div>
                          </div>
                        ))}

                      </div>

                      <div className="last_box">
                        <div className={`patch_box ${(infoData.assetsType === assertsTypes.network) && 'disableCard'}`}>
                          <div className="box_icon">
                            <img
                              alt="box_icon"
                              src={backup}
                              className=""
                            />
                          </div>
                          <div className="box_heading">Backup</div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">

                      <Card>
                        <CardBody className="total-assets mt-1">

                          <div className="pr-0">

                            <Col md={10}>
                              <p className="graph-title-heading mb-0">Device Risk Score</p>
                              <div className="ring-number">{infoData?.score}</div>
                            </Col>

                            {/* <div className='score_badge'><Badge color='light-danger'>0.6%</Badge></div> */}

                            <div>
                              <GaugeNew score={Math.round(infoData?.score)} />
                            </div>

                          </div>

                        </CardBody>
                      </Card>
                    </div>
                    <div className="col-md-8">
                      <h1 className="assets_table_heaidng">Risk Details</h1>
                      <div className="assets_table">
                        <table className="table table-striped table-striped">
                          <thead>
                            <tr>
                              <th scope="col">SOURCE</th>
                              <th scope="col">CURRENT SCORE</th>
                              <th scope="col">TIME DETECTED</th>
                              <th scope="col">IMPACT ON SCORE</th>
                            </tr>
                          </thead>
                          <tbody>
                            {infoData?.tableData?.map((item, key) => (
                              <tr key={key}>
                                <td>{scoreTitles[item?.risk_source]}</td>
                                <td>{item?.risk_score}</td>
                                <td>
                                  {dateFormat(item?.updatedAt, true)}
                                </td>
                                <td>{item?.impact_score}</td>

                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="assets_table_heaidng">Software</h1>
                      <div className="machine_content">

                        {infoData?.software?.map((item, key) => (
                          <div key={key} className="row">
                            <div className="machine_content_heading">
                              <h1>{item.label}</h1>
                            </div>
                            <div className="machine_content_detail">
                              <p>{item.value}</p>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>

                    <div className="col-md-6">
                      <h1 className="assets_table_heaidng">Hardware</h1>

                      <div className="machine_content">
                        {infoData?.hardware?.map((item, key) => (
                          <div key={key} className="row">
                            <div className="machine_content_heading">
                              <h1>{item.label}</h1>
                            </div>
                            <div className="machine_content_detail">
                              <p>{item.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AssetsInfo;
