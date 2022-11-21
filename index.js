var sessions = {
  mobile : [1,2,3],
  tablets : [3,4,5], 
  desktops : [5,6,7]
}
  
function printData(id,name,sessions){
  div = document.createElement('div');
  div.id = id;
  div.textContent = name + ' : ' + sessions;
  document.querySelector('body').appendChild(div);
}
  
// var mobileData = {
//   id : 'mobile-container',
//   name: 'mobile',
//   sessions: sessions['mobile'],
// };

// var tabletData = {
//     id : 'tablet-container',
//     name: 'tablet',
//     sessions: sessions['tablets']
// }
// var desktopData = {
//     id: 'desktop-container',
//     name: 'desktop',
//     sessions: sessions['desktops']
// }

// printData (mobileData.id, mobileData.name, mobileData.sessions);
// printData (tabletData.id, tabletData.name, tabletData.sessions);
// printData (desktopData.id, desktopData.name, desktopData.sessions);
// printData (mobileData.id, tabletData.name, desktopData.sessions);

var devices = Object.keys(sessions);

// document.querySelector('body').append(`${devices}`);

var data = devices.map((device) => {
    return {
        id: device + '-container',
        name: device,
        sessions: sessions[device]
    }
});

data.forEach((device) => {
    printData(device.id, device.name, device.sessions)
});

