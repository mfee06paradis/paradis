import React, { Component } from 'react';
import TWzipcode from 'react-twzipcode';

class Address extends Component {
  update = (value) => {
    const newMember = value;
    localStorage.setItem('Member', JSON.stringify(newMember));
  };
  handleChange = (data) => {
    let addressData = data.county + data.district + data.zipcode;
    console.log(addressData);
    // document.getElementById('address').value = addressData;

    // this.update({
    //   MemberID: '003',
    //   MemberName: '杜子晴',
    //   MemberPW: '1234abcd',
    //   MemberSex: 'F',
    //   MemberBirthday: '1991-03-24',
    //   MemberPhone: '0994060776',
    //   MemberEmail: 'Olivia54685@hotmail.com',
    //   MemberAddress: addressData,
    //   MemberLevel: 'Member',
    //   MemberCreatedAt: '2020-01-11',
    //   MemberAvatar: '../images/avatar1.jpg',
    // });
  };

  render() {
    const member = localStorage.getItem('Member') || [];
    const parseUserMember = JSON.parse(member);
    const address = parseUserMember.MemberAddress.substr(0, 3);
    const address2 = parseUserMember.MemberAddress;
    return (
      <div className="row accountRow">
        <div className="col-1"></div>
        <div className="col-11">地址</div>
        <div className="col-1"></div>
        <div className="col-3">
          <p>縣市</p>
          <p>區/鄉/鎮</p>
          <p>郵遞區號</p>
        </div>
        <div>
          <TWzipcode
            countyValue={address}
            districtValue={''}
            zipcodePlaceholder={'郵遞區號'}
            css={[
              'form-control county-sel',
              'form-control district-sel',
              'form-control zipcode',
            ]}
            handleChangeCounty={this.handleChange}
            handleChangeDistrict={this.handleChange}
            handleChangeZipcode={this.handleChange}
          />
        </div>
        <div className="col-12"></div>
        <div className="col-1"></div>
        <div className="col-10">
          <input
            type="text"
            style={{ height: '6em' }}
            id="address"
            placeholder={address2}
            // onBlur={checkAddress}
            onChange={() => {
              console.log(this.data);
            }}
          />
          <span id="addressMesg"></span>
        </div>
      </div>
    );
  }
}

export default Address;
