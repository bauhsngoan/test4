const Discord = require('discord.js');
const client = new Discord.Client();
var request = require("request")
var url = "http://139.180.190.14:30120/players.json"
client.on
    (
      'ready', () =>
      {
        console.log(`BOT ${client.user.tag} Đã Online!`);
      }
    );
     client.on
       (
         'ready', () =>
          {
            setInterval
               (
                 () =>
                     {
                       request(
                                {
                                  url: url,
                                  json: true
                                },
                                function (error, response, body)
                                  {
                                    var string ='';
                                    var sstring = '';
                                    if (!error && response.statusCode === 200)
                                       {
                                          let entry = body    
                                          console.log(entry.length) 
                                          var slca = 0; var slmed = 0;var slch = 0;var slqy = 0;
                                          for (let i=1; i<entry.length; i++)
                                               {        
                                                 let name = entry[i]["name"].toLowerCase().trim(); 
                                                 if (name.indexOf('ca') == 0 || name.indexOf('qlca') == 0 || name.indexOf('gđca') == 0 || name.indexOf('gdca') == 0 || name.indexOf('pgdca') == 0 || name.indexOf('pgđca') == 0 || name.indexOf('swat') == 0 ) slca++;
                                                 else if (name.indexOf('med') == 0 || name.indexOf('gđbs') == 0 || name.indexOf('gdbs') == 0 || name.indexOf('pgdbs') == 0  || name.indexOf('pgđbs') == 0 ) slmed++;
                                                 else if (name.indexOf('ch') == 0 || name.indexOf('gđch') == 0 || name.indexOf('gdch') == 0 || name.indexOf('pgđch') == 0 || name.indexOf('tvch') == 0   || name.indexOf('tkch') == 0 || name.indexOf('đtch') == 0 ) slch++;
                                                 else if (name.indexOf('qy') == 0 || name.indexOf('qlqy') == 0 || name.indexOf('pgdqy') == 0 || name.indexOf('pgđqy') == 0 || name.indexOf('gdqy') == 0 || name.indexOf('gđqy') == 0 ) slqy++;
                                               } 
                                                  var d = new Date();
                                                  client.user.setActivity
                                                  (
                                                     ' online '+entry.length+' | 👮🏻:'+slca+'👨‍⚕️:'+slmed+'🔧:'+slch+'️🎖️:'+slqy+'.' , { type: 'PLAYING' }
                                                   )
                                         }    
                                        // Uptime: '+d.toLocaleTimeString()+'
                                        // catch (err)
                                        //  {
                                        //   console.log("AUTO UPDATE UPTIME (ERROR) : " + err)
                                        //   client.user.setActivity('Server Offline')
                                        //  }
                                   }
                               )
                       }
                     ,9000
                 );
           }
       );
       
///=============== ADD ROLES ==================
       client.on('guildMemberAdd' , async guildMember =>{
        var i = '855312617986981960' // id role
        let role = guildMember.guild.roles.cache.find(r => r.id === i);

        guildMember.roles.add(role);

       });

///=============== WELCOME ==================
client.on("guildMemberAdd", async (member) => {
  const moment = require('moment-timezone');
  moment.locale('vi');

   let guild = client.guilds.cache.get("869421926978842625"); // ID server
   let channel = client.channels.cache.get("869421927440199682"); // ID channel
   let joineddate = moment(member.guild.members.cache.get(member.user.id).joinedAt).tz('Asia/Saigon').format("ss:mm:HH - dddd,DD/MM/YYYY");
   let createddate = moment(member.user.createdAt).tz('Asia/Saigon').format("ss:mm:HH - dddd,DD/MM/YYYY");
   let targetChannelID = member.guild.channels.cache.get('869421927440199682'); // ID channnel tag 1 
   let targetChannelID2 = member.guild.channels.cache.get('869421927440199682'); //  ID channel tag 2
   let membercount = member.guild.memberCount
   let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'blabla'); // tên emoji
 
   if (guild != member.guild) {
     return console.log('noi chung la khong biet ghi gi.');
   } else {
 
     let embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setAuthor(member.user.tag, member.user.displayAvatarURL())
     .setTitle(`${emoji} WELCOME TO ${guild.name} ${emoji}`)
     .setImage('https://cdn.discordapp.com/attachments/807319666849874000/810207016584347668/1-1.gif')
     .setDescription(`Hey ${member.user} , Chào Mừng Đến Với Server  **${guild.name}!**
      Bạn Là Thành Viên Thứ **${membercount}**
      Hãy Trải Nghiệm Roleplay Theo Cách Của Bạn ❤
      •Hãy Dành Một Chút Thời Gian Ghé Qua ${targetChannelID} Đọc Luật Để Tránh Những Sai Phạm Đáng Tiếc.
      •Chúc Bạn Giao Lưu Vui Vẻ Ở ${targetChannelID2}
      •Nếu Chưa Hài Lòng Hãy Góp Ý Cho Chúng Mình Ché!
      Chúc Bạn Có Thời Gian Vui Vẻ Tại Sever  **${guild.name}**!
      🗺 Pegasus Roleplay 2.0 Luôn Chào Đón Bạn`)
      .addFields(
       { name: 'ID Người Dùng:', value: member.user.id , inline: true },
       { name: 'Tài Khoản Tạo Vào:', value: `${createddate}` ,  inline: false},
       { name: 'Tham Gia Máy Chủ Vào:', value: `${joineddate}` , inline: false },
     )
     .setThumbnail(member.user.displayAvatarURL({ dynamic: false, format:"png", size: 1024}))
     .setFooter('@ Bot Edit By Pegasus Roleplay.', 'https://cdn.discordapp.com/attachments/858925008314171413/861124043331993660/pegasus_1.jpg')
     .setTimestamp();
 
     await channel.send(embed)
   }
 })

client.on(
      'message', message => {
        const prefix = '';
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
  function lingo(s)
       {  
         function add(x, y)
               {
                 var c = 0, r = [];
                 var x = x.split('').map(Number);
                 var y = y.split('').map(Number);
                 while(x.length || y.length)
                       {
                          var s = (x.pop() || 0) + (y.pop() || 0) + c;
                          r.unshift(s < 10 ? s : s - 10); 
                          c = s < 10 ? 0 : 1;
                         }
                  if(c) r.unshift(c);
                  return r.join('');
                }  
                   var dec = '0';
                    s.split('').forEach(function(chr) 
                       {
                         var n = parseInt(chr, 16);
                         for(var c = 8; c; c >>= 1) 
                             {
                               dec = add(dec, dec);
                               if(n & c) dec = add(dec, '1');
                              }
                       }
            );
           return dec;
        }

///=============== BOT HELP ==================

if (command == '.bothelp')
{   
  request(
           {
              url: url,
              json: true
            }, 
               function (error, response, body) 
                 {
                   var string ='';
                    if (!error && response.statusCode === 200) 
                     {
                        let entry = body
                        console.log(entry.length) 
                        string = string + '**Lệnh Check BOT:** \n';
                        string = string + "```";
                        // string = string + '+ Check link Steam, ID người chơi:_____ .id x (x là số id ingame) \n';
                        string = string + '+ Check Số lượng online của server:____ .uptime \n';
                        string = string + '+ Check Số lượng thành viên gangter:___ .gang \n';
                        string = string + '+ Check Gang Angel of Deaths:__________ .aod \n';
                        string = string + '+ Check Gang Xóm Nghiện:_______________ .xn \n';
                        string = string + '+ Check Bác Sĩ:________________________ .med \n';
                        string = string + '+ Check Cứu Hộ:________________________ .ch \n';
                        string = string + '+ Check Công An:_______________________ .ca \n';
                        string = string + '+ Check Quân Y:________________________ .qy \n';
                        string = string + '+ Check Quân Y % Công An:______________ .qyca \n';
                        string = string + "```";
                        string = string + '**Lưu ý:**  *Ai Có Role Thành Viên Trở Lên Nới Nhập Lệnh Đc Nha*! \n';
                       message.reply(string);
                     }
                 }
         )    
}

///=============== XOA CACHE ==================

if (command == '.cache')
{   
  request(
           {
              url: url,
              json: true
            }, 
               function (error, response, body) 
                 {
                   var string ='';
                    if (!error && response.statusCode === 200) 
                     {
                        let entry = body
                        console.log(entry.length) 
                        string = string + '**HƯỚNG DẪN XÓA CACHE FIVEM:**  \n';
                        string = string + "```";
                        string = string + '+ Bước 1: Chuột Phải FiveM Chọn Open File Location.  \n';
                        string = string + '+ Bước 2: Chọn FiveM Application Data (Hình Con ốc Sên Thường ở Trên Cùng).  \n';
                        string = string + '+ Bước 3: Chọn Vào Thư Mục Cache -> Priv -> Xoá Hết Tất Cả File Trong Đây, để lại 2 thư mục trên cùng (db và unconfirmed).  \n';
                        string = string + '+ Bước 4: Khởi Động Lại FiveM.  \n';
                        string = string + '------------------------  \n';
                        string = string + '© Copyright By Pegasus Roleplay  \n'
                        string = string + "```";
                       message.reply(string);
                     }
                 }
         )    
}

///=============== IP ==================

/*if (command == '!ip')
{   
  request(
           {
              url: url,
              json: true
            }, 
               function (error, response, body) 
                 {
                   var string ='';
                    if (!error && response.statusCode === 200) 
                     {
                        let entry = body
                        console.log(entry.length) 
                        string = string + '**__IP Vào Server Pegasus Roleplay 2.0__:**  \n';
                        string = string + '**Hướng Dẫn Vào Server Pegasus Roleplay 2.0** \n';
                        string = string + 'Vào FiveM ➱ F8  \n';
                        string = string + 'Coppy **__connect pegasusrp.net__** \n';
                        string = string + '**Để Vào Sever** \n';
                        string = string + '**Chúc Các Bạn Thưởng Thức Game Vui Vẻ!** \n';
                       message.reply(string);
                     }
                 }
         )    
}*/

///=============== IP 2 ==================

/*if (command == '.ip')
{   
  request(
           {
              url: url,
              json: true
            }, 
               function (error, response, body) 
                 {
                   var string ='';
                    if (!error && response.statusCode === 200) 
                     {
                      let entry = body
                      console.log(entry.length) 
                      string = string + '**__IP Vào Server Pegasus Roleplay 2.0__:**  \n';
                      string = string + '**Hướng Dẫn Vào Server Pegasus Roleplay 2.0** \n';
                      string = string + 'Vào FiveM ➱ F8  \n';
                      string = string + 'Coppy **__connect pegasusrp.net__** \n';
                      string = string + '**Để Vào Sever** \n';
                      string = string + '**Chúc Các Bạn Thưởng Thức Game Vui Vẻ!** \n';
                     message.reply(string);
                     }
                 }
         )    
}*/

///================= BAN QUẢN TRỊ ===================

if (command == '!admin') 
{
  const exampleEmbed = new Discord.MessageEmbed()
      .setAuthor('Chào mừng bạn đến với Pegasus Roleplay 2.0')
      .setDescription('*Discord Thành Lập Vào Ngày:  Ngày 30, Tháng 06, Năm 2021*')
      .setTitle('**Ban Quản Trị:**')
      .addFields(
                  { name: '- **Owner:**',  value: '<@847509839353872434>' },
                  { name: '- **Ban Quản Trị & Điều Hành:**',  value: '<@701735002261422100> , <@594982282209787910>, <@707502424708874251> ' },
                  { name: '- Mod Hỗ Trợ:',           value: '<@858689787220066316>, <@731586601611821116>'  },
                  { name: '- Coder:',           value: '<@756349649316478987>' },
                )
      .setThumbnail('https://cdn.discordapp.com/attachments/858925008314171413/861124074317938748/0e23af4db83a8f10f3816e6b4d881332116bda6874bdda9ccc829a52f39935a9_2.gif')
      .setColor('#ff4112')
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/697049699193978941/746691133660332092/divider_1.gif')
      .setFooter('© Copyright by Pegasus Roleplay.', 'https://cdn.discordapp.com/attachments/858925008314171413/861124043331993660/pegasus_1.jpg')
 message.channel.send(exampleEmbed);
  return; 
} 


///================== UPTIME ==================

if (command == '.uptime')
 {
   request(
             {
                url: url,
                json: true
             }, 
             function (error, response, body)
               {
                  var string ='';
                      if (!error && response.statusCode === 200) 
                       {
                          let entry = body
                                console.log(entry.length) 
                                 let slca = 0, slqy = 0, slmed = 0, slch = 0, slall = entry.length;
                                 for (let i=0 ; i<slall; i++) 
                                   {
                                    let name = entry[i]["name"].toLowerCase().trim(); 
                                     if (name.indexOf('ca') == 0 || name.indexOf('qlca') == 0 || name.indexOf('gđca') == 0 || name.indexOf('gdca') == 0 || name.indexOf('pgdca') == 0 || name.indexOf('pgđca') == 0 || name.indexOf('qlca') == 0 || name.indexOf('swat') == 0 )  slca++;
                                     else if (name.indexOf('med') == 0 || name.indexOf('gđbs') == 0 || name.indexOf('gdbs') == 0 || name.indexOf('pgdbs') == 0  || name.indexOf('pgđbs') == 0  || name.indexOf('qlbs') == 0 ) slmed++;
                                     else if (name.indexOf('ch') == 0 || name.indexOf('gđch') == 0 || name.indexOf('gdch') == 0 || name.indexOf('pgđch') == 0 || name.indexOf('pgdch') == 0 ||  name.indexOf('qlch') == 0 ) slch++;
                                     else if (name.indexOf('qy') == 0 || name.indexOf('qlqy') == 0 || name.indexOf('pgdqy') == 0 || name.indexOf('pgđqy') == 0 || name.indexOf('gdqy') == 0 || name.indexOf('gđqy') == 0 ) slqy++;
                                    }
                                    const exampleEmbed = new Discord.MessageEmbed()
                                .setColor('#ff7112')
                                .setAuthor('Server Pegasus Roleplay 2.0.' , 'https://cdn.discordapp.com/attachments/858925008314171413/861124074317938748/0e23af4db83a8f10f3816e6b4d881332116bda6874bdda9ccc829a52f39935a9_2.gif')
                                .setTitle('Pegasus Roleplay 2.0.')
                                .setThumbnail('https://cdn.discordapp.com/attachments/858925008314171413/861124074317938748/0e23af4db83a8f10f3816e6b4d881332116bda6874bdda9ccc829a52f39935a9_2.gif')
                                .setTimestamp()
                                .setFooter('Edit By Pegasus Roleplay', 'https://cdn.discordapp.com/attachments/858925008314171413/861124043331993660/pegasus_1.jpg')
                                .addFields(
                                            { name: 'Owner:',      value: '<@847509839353872434>', inline: false },
                                            { name: 'Ban Quản Trị & Điều Hành:',  value: ' <@701735002261422100>, <@594982282209787910>, <@707502424708874251>',  inline: false },
                                            { name: 'Mod Hỗ Trợ:',    value: '<@858689787220066316>, <@731586601611821116>',inline: false},
                                            { name: 'Coder:', value: '<@756349649316478987>',inline: false },
                                            { name: `**Trong Game:**`, value: '```yaml\n Số người Chơi: ' +entry.length+' 👮🏻:'+slca+ '👨‍⚕️:'+slmed+'🔧:'+slch+'️🎖️:'+slqy+'```'  , inline: false },
                                          )
                                  message.channel.send(exampleEmbed);       
                       }
               }
           )
 };

///============Tim ID=============///

    if (command == '.id')
   {
      if(message.member.roles.cache.some(r => r.name === ''))
      return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)
    };

if (command == '.id') 
{
  if(message.member.roles.cache.some(r => r.name === 'Uptime'))
 {
   if (!args.length)
     {
       return message.channel.send(`Không Có ID Tìm Đầu Buồi À, ${message.author}!`);
      }
   request(
                {
                   url: url,
                   json: true
                 }, 
               function (error, response, body) 
              {
                var string ='';
                    if (!error && response.statusCode === 200) 
                  {
                     let entry = body
                     console.log(entry.length) 
                      var o = 1;
                      for (let i=1; i<entry.length; i++)
                       {
                          var b = entry[i]["id"];
                          var c = entry[i]["identifiers"][0].substr(6,15);
                          var d = entry[i]["identifiers"][2];
                              if(entry[i]["identifiers"][2])
                                       {
                                         if(d.substr(0,7)=='discord')
                                             {
                                                d = '<@'+entry[i]["identifiers"][2].substr(8,18)+'>';
                                              }
                                               else
                                                 {
                                                    d='**Thằng Này Không Mở Discord!**';
                                                 }
                                         }
                                            else 
                                               {
                                                  d='**Thằng Này Không Mở Discord!**';
                                               }
                                                 if(b == `${args}`)
                                    {
                                      const exampleEmbed = new Discord.MessageEmbed()
                                        .setColor('#42f5b3')
                                        .setTitle(' Tên Ingame:'+ "   " +entry[i]["name"])
                                        .setAuthor('Thông Tin Người Chơi:')                    
                                        .setThumbnail('https://cdn.discordapp.com/attachments/858925008314171413/861124074317938748/0e23af4db83a8f10f3816e6b4d881332116bda6874bdda9ccc829a52f39935a9_2.gif')
                                        .setTimestamp()
                                        .setFooter('Edit By Pegasus Roleplay', 'https://cdn.discordapp.com/attachments/858925008314171413/861124043331993660/pegasus_1.jpg')
                                        .addFields(     
                                                    { name: '+ ID Server:' , value: + entry[i]["id"]},
                                                    { name: '+ Link Steam:', value: 'https://steamcommunity.com/profiles/' + lingo(c) },
                                                    { name: '+ Discord:'   , value: d },
                                                   )  
                                             message.channel.send(exampleEmbed);
                                               return;   
                                   }
                         }    
                   }
              }
           ) 
   }  
}
   

///=============== INFO CHECK ==================

if (command == '.check')
  {
     {
       if(message.member.roles.cache.some(r => r.name === '?'))
       return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)
     };         
       request
           (
               {
                 url: url,
                 json: true
               },
                 function (error, response, body)
                  {
                    var string ='';
                    if (!error && response.statusCode === 200) 
                    {
                        let entry = body
                        console.log(entry.length) 
                        let slall = entry.length;
          
                        function cach(maxcach , length)
                                 {
                                   khoangcach = " "
                                    return khoangcach.substring(0, maxcach - length)
                                  }         
                                      let indexarr = 0;
                                      let resarrstr = [""]         
                                           for (let i=0; i<entry.length; i++) 
                                               {
                                                  let stt = i+1; 
                                                   let ID = '[ID:' + entry[i]["id"] + ']' +cach(6 , entry[i]["id"].toString().length)
                                                   resarrstr[indexarr] += `\n#${stt + cach(5 , stt.toString().length)}${ID}: ${entry[i]["name"]}`                          
                                                   if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                                                   // if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                                               }                             
                                                   for (let i=0 ; i<= resarrstr.length ; i++)
                                                         {
                                                           const exampleEmbed = new Discord.MessageEmbed()
                                                            .setColor('#42f5b3')
                                                            .setTitle('Số lượng người online: ' +entry.length )
                                                            .setAuthor('Server Pegasus Roleplay 2.0. ' , 'https://cdn.discordapp.com/attachments/858925008314171413/861124074317938748/0e23af4db83a8f10f3816e6b4d881332116bda6874bdda9ccc829a52f39935a9_2.gif')                    
                                                            .setThumbnail('https://cdn.discordapp.com/attachments/858925008314171413/861124074317938748/0e23af4db83a8f10f3816e6b4d881332116bda6874bdda9ccc829a52f39935a9_2.gif')
                                                            // .setImage('https://cdn.discordapp.com/attachments/697049699193978941/746691133660332092/divider_1.gif')   
                                                            .setTimestamp()
                                                            .setFooter('Edit by Pegasus Roleplay', 'https://cdn.discordapp.com/attachments/858925008314171413/861124043331993660/pegasus_1.jpg')
                                                            .addFields(
                                                                         { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
                                                                       )
                                                            .setTimestamp();
                                                           message.channel.send(exampleEmbed);
                                                         }           
                     }
                }
            ) 
  }
     

 //========Info Cong An==============

      
  if (command == '.ca') {{
      if(message.member.roles.cache.some(r => r.name === '?'))
      return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};      

      request({
          url: url,
          json: true
      }, function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 

              var slca = 0;var slqy = 0;
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,2) == 'CA' || b.substring(0,4) == 'SWAT' || b.substring(0,4) == 'CACĐ' || b.substring(0,4) == 'QLCA' || b.substring(0,4) == 'GĐCA' || b.substring(0,4) == 'GDCA' || b.substring(0,5) == 'PGĐCA' || b.substring(0,2) == 'QY' || b.substring(0,4) == 'QLQY' || b.substring(0,5) == 'PGDQY' || b.substring(0,5) == 'PGĐQY' || b.substring(0,4) == 'GDQY' || b.substring(0,4) == 'GĐQY' ){
                  slca = slca + 1;
                 }
                // if(b.substring(0,6) == 'QUÂN Y' || b.substring(0,6) == 'Quân y' || b.substring(0,6) == 'Quân Y' ||  b.substring(0,4) == 'GĐQY' || b.substring(0,4) == 'QLQY'){
                //   slqy = slqy + 1;
                // }

              }

         
              string = string + '```+ Số lượng *CA* đang online: ' + ' ==>  Công An:'+slca+'  \n';
              string = string + '----------------------------------- \n';
              string = string + '+ Danh Sách *CA* đang online: \n';
              var o = 1;
               for (let i=1; i<entry.length; i++) {
                   var b = entry[i]["name"];
                   var a = entry[i]["id"];
                   var c = entry[i]["identifiers"][0].substr(6,15);
                   if(b.substring(0,2) == 'CA' || b.substring(0,4) == 'SWAT' || b.substring(0,4) == 'CACĐ' || b.substring(0,4) == 'QLCA' || b.substring(0,4) == 'GĐCA' || b.substring(0,4) == 'GDCA' || b.substring(0,5) == 'PGĐCA' || b.substring(0,2) == 'QY' || b.substring(0,4) == 'QLQY' || b.substring(0,5) == 'PGDQY' || b.substring(0,5) == 'PGĐQY' || b.substring(0,4) == 'GDQY' || b.substring(0,4) == 'GĐQY' ){
                    string = string +" #"+ o +". " + " [Id: "+ a +"]" +'  ==>  '+ b + '\n';
                   //string = string + '(https://steamcommunity.com/profiles/' + c +')\n';
                   o = o + 1;
                   } 
               }
              //  for (let i=1; i<entry.length; i++) {
              //      var b = entry[i]["name"];
              //      var a = entry[i]["id"];
              //      var c = entry[i]["identifiers"][0].substr(6,15);
              //      if(b.substring(0,6) == 'QUÂN Y' || b.substring(0,6) == 'Quân y' || b.substring(0,6) == 'Quân Y' ||  b.substring(0,4) == 'GĐQY' || b.substring(0,4) == 'QLQY'){
              //      string = string +" #"+ o +". " + " [Id: "+ a +"]" +'  ==>  '+ b + '\n';
              //      //string = string + '(https://steamcommunity.com/profiles/' + c +')\n';
              //      o = o + 1;
              //      } 
              //  }
              string = string + '------------------------ \n';
              string = string + '© Copyright by Pegasus Roleplay \n';
              string = string + "```";
               message.reply(string);
          }
      })    }
      

//========Info Quân Y==============

      
if (command == '.qy') {{
  if(message.member.roles.cache.some(r => r.name === '?'))
  return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};      

  request({
      url: url,
      json: true
  }, function (error, response, body) {
      var string ='';
      if (!error && response.statusCode === 200) {
          let entry = body
          console.log(entry.length) 

          var slqy = 0
          for (let i=1; i<entry.length; i++) {
            var b = entry[i]["name"];
            if(b.substring(0,2) == 'QY' || b.substring(0,6) == 'Quân Y' || b.substring(0,4) == 'QLQY' ||  b.substring(0,5) == 'PGDQY' || b.substring(0,5) == 'PGĐQY' || b.substring(0,4) == 'GDQY' || b.substring(0,4) == 'GĐQY'){
              slqy = slqy + 1;
            }

          }

     
          string = string + '```+ Số lượng *Quân Y* đang online: ' + ' ==>  Quân Y:'+slqy+'  \n';
          string = string + '----------------------------------- \n';
          string = string + '+ Danh Sách *Quân Y* đang online: \n';
          var o = 1;
           for (let i=1; i<entry.length; i++) {
               var b = entry[i]["name"];
               var a = entry[i]["id"];
               var c = entry[i]["identifiers"][0].substr(6,15);
               if(b.substring(0,2) == 'QY' || b.substring(0,6) == 'Quân Y' || b.substring(0,4) == 'QLQY' ||  b.substring(0,5) == 'PGDQY' || b.substring(0,5) == 'PGĐQY' || b.substring(0,4) == 'GDQY' || b.substring(0,4) == 'GĐQY'){
                string = string +" #"+ o +". " + " [Id: "+ a +"]" +'  ==>  '+ b + '\n';
               //string = string + '(https://steamcommunity.com/profiles/' + c +')\n';
               o = o + 1;
               } 
           }
          string = string + '------------------------ \n';
          string = string + '© Copyright by Pegasus Roleplay\n';
          string = string + "```";
           message.reply(string);
      }
  })    }
  

//========Info Quân Y==============

      
if (command == '.caqy') {{
  if(message.member.roles.cache.some(r => r.name === '?'))
  return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};      

  request({
      url: url,
      json: true
  }, function (error, response, body) {
      var string ='';
      if (!error && response.statusCode === 200) {
          let entry = body
          console.log(entry.length) 

          var slcaqy = 0
          for (let i=1; i<entry.length; i++) {
            var b = entry[i]["name"];
            if(b.substring(0,2) == 'CA' || b.substring(0,5) == 'PGDCQ' || b.substring(0,4) == 'QLCA' || b.substring(0,4) == 'GĐCA' || b.substring(0,4) == 'GDCA' || b.substring(0,5) == 'PGĐCA' || b.substring(0,2) == 'QY' || b.substring(0,4) == 'QLQY' || b.substring(0,5) == 'PGDQY' || b.substring(0,5) == 'PGĐQY' || b.substring(0,4) == 'GDQY' || b.substring(0,4) == 'GĐQY' || b.substring(0,2) == 'QY' || b.substring(0,6) == 'Quân Y' || b.substring(0,4) == 'QLQY' ||  b.substring(0,5) == 'PGDQY' || b.substring(0,5) == 'PGĐQY' || b.substring(0,4) == 'GDQY' || b.substring(0,4) == 'GĐQY' ){
              slcaqy = slcaqy + 1;
            }

          }

     
          string = string + '```+ Số lượng *Cảnh Sát & Quân Y* đang online: ' + ' ==>  Quân Y:'+slcaqy+'  \n';
          string = string + '----------------------------------- \n';
          string = string + '+ Danh Sách *Cảnh Sát & Quân Y* đang online: \n';
          var o = 1;
           for (let i=1; i<entry.length; i++) {
               var b = entry[i]["name"];
               var a = entry[i]["id"];
               var c = entry[i]["identifiers"][0].substr(6,15);
               if(b.substring(0,2) == 'CA' || b.substring(0,5) == 'PGDCQ' || b.substring(0,4) == 'QLCA' || b.substring(0,4) == 'GĐCA' || b.substring(0,4) == 'GDCA' || b.substring(0,5) == 'PGĐCA' || b.substring(0,2) == 'QY' || b.substring(0,4) == 'QLQY' || b.substring(0,5) == 'PGDQY' || b.substring(0,5) == 'PGĐQY' || b.substring(0,4) == 'GDQY' || b.substring(0,4) == 'GĐQY' || b.substring(0,2) == 'QY' || b.substring(0,6) == 'Quân Y' || b.substring(0,4) == 'QLQY' ||  b.substring(0,5) == 'PGDQY' || b.substring(0,5) == 'PGĐQY' || b.substring(0,4) == 'GDQY' || b.substring(0,4) == 'GĐQY' ){
                string = string +" #"+ o +". " + " [Id: "+ a +"]" +'  ==>  '+ b + '\n';
               //string = string + '(https://steamcommunity.com/profiles/' + c +')\n';
               o = o + 1;
               } 
           }
          string = string + '------------------------ \n';
          string = string + '© Copyright by Pegasus Roleplay\n';
          string = string + "```";
           message.reply(string);
      }
  })    }

///========================= INFO CH ============================

if (command == '.ch') 
   {
       {
         if(message.member.roles.cache.some(r => r.name === '?'))
         return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)
        };

         request
           (
               {
                 url: url,
                 json: true
                }, 
               function (error, response, body) 
                 {
                   var string ='';
                   if (!error && response.statusCode === 200) 
                      {
                        let entry = body
                         console.log(entry.length)
                        var slch = 0;
                        for (let i=1; i<entry.length; i++)
                             {
                               var b = entry[i]["name"];
                               if(b.substring(0,2) == 'CH' || b.substring(0,4) == 'GĐCH' || b.substring(0,5) == 'PGĐCH' || b.substring(0,4) == 'QLCH' || b.substring(0,4) == 'GDCH' || b.substring(0,5) == 'PGDCH')
                               {
                                  slch = slch + 1;
                                }
                             }
                                  string = string + '```+ Số lượng *Cứu Hộ* đang online: '+ slch +'\n';
                                  string = string + '------------------------------------  \n';
                                  string = string + '+ Danh Sách *Cứu Hộ* đang online: \n';
                                  var o = 1;
                                   for (let i=1; i<entry.length; i++) 
                                       {
                                          var b = entry[i]["name"];
                                          var a = entry[i]["id"];
                                          var c = entry[i]["identifiers"][0].substr(6,15);
                                          if(b.substring(0,2) == 'CH' || b.substring(0,4) == 'GĐCH' || b.substring(0,5) == 'PGĐCH' || b.substring(0,4) == 'QLCH' || b.substring(0,4) == 'GDCH' || b.substring(0,5) == 'PGDCH')
                                             {
                                                string = string +" #"+ o +". " + " [Id: "+ a +"]" +'  ==>  '+ b + '\n';
                                                    o = o + 1;
                                               } 
                                       }
                                  string = string + '------------------------ \n';
                                  string = string + '© Copyright by Pegasus Roleplay \n';
                                  string = string + "```";
                                   message.reply(string);
                       }
                   }
             )   
   }
 
///======================= INFO MED ===========================

if (command == '.med') 
   {
       {
         if(message.member.roles.cache.some(r => r.name === '?'))
         return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)
        };

         request
           (
               {
                 url: url,
                 json: true
                }, 
               function (error, response, body) 
                 {
                   var string ='';
                   if (!error && response.statusCode === 200) 
                      {
                        let entry = body
                         console.log(entry.length)
                        var slmed = 0;
                        for (let i=1; i<entry.length; i++)
                             {
                               var b = entry[i]["name"];
                               if(b.substring(0,3) == 'MED' || b.substring(0,4) == 'GĐBS' || b.substring(0,5) == 'PGĐBS' || b.substring(0,4) == 'GDBS' || b.substring(0,5) == 'PGDBS' || b.substring(0,4) == 'QLBS')
                               {
                                  slmed = slmed + 1;
                                }
                             }
                                  string = string + '```+ Số lượng *MED* đang online: '+ slmed +'\n';
                                  string = string + '------------------------------------  \n';
                                  string = string + '+ Danh Sách *MED* đang online: \n';
                                  var o = 1;
                                   for (let i=1; i<entry.length; i++) 
                                       {
                                          var b = entry[i]["name"];
                                          var a = entry[i]["id"];
                                          var c = entry[i]["identifiers"][0].substr(6,15);
                                          if(b.substring(0,3) == 'MED' || b.substring(0,4) == 'GĐBS' || b.substring(0,5) == 'PGĐBS' || b.substring(0,4) == 'GDBS' || b.substring(0,5) == 'PGDBS' ||  b.substring(0,4) == 'QLBS')
                                             {
                                                string = string +" #"+ o +". " + " [Id: "+ a +"]" +'  ==>  '+ b + '\n';
                                                    o = o + 1;
                                               } 
                                       }
                                  string = string + '------------------------ \n';
                                  string = string + '© Copyright by Pegasus Roleplay \n';
                                  string = string + "```";
                                   message.reply(string);
                       }
                   }
             )   
   }

///======================= INFO GANG AOD ==========================

if (command == '.aod') 
   {
       {
         if(message.member.roles.cache.some(r => r.name === '?'))
         return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)
        };

         request
           (
               {
                 url: url,
                 json: true
                }, 
               function (error, response, body) 
                 {
                   var string ='';
                   if (!error && response.statusCode === 200) 
                      {
                        let entry = body
                         console.log(entry.length)
                        var slaod = 0;
                        for (let i=1; i<entry.length; i++)
                             {
                               var b = entry[i]["name"];
                               if(b.substring(0,3) == 'aod'  || b.substring(0,3) == 'AOD')
                                {
                                  slaod = slaod + 1;
                                }
                             }
                                  string = string + '```+ Số lượng Gang *Angel of Deaths* đang online: '+ slaod +'\n';
                                  string = string + '------------------------------------  \n';
                                  string = string + '+ Danh Sách Gang *Angel of Deaths* đang online: \n';
                                  var o = 1;
                                   for (let i=1; i<entry.length; i++) 
                                       {
                                          var b = entry[i]["name"];
                                          var a = entry[i]["id"];
                                          var c = entry[i]["identifiers"][0].substr(6,15);
                                          if(b.substring(0,3) == 'aod'  || b.substring(0,3) == 'AOD')
                                          {
                                                string = string +" #"+ o +". " + " [Id: "+ a +"]" +'  ==>  '+ b + '\n';
                                                    o = o + 1;
                                               } 
                                       }
                                  string = string + '------------------------ \n';
                                  string = string + '© Copyright By Pegasus Roleplay \n';
                                  string = string + "```";
                                   message.reply(string);
                       }
                   }
             )   
   }
 
///======================== INFO GANG XÓM NGHIỆN =============================

if (command == '.xn') 
   {
       {
         if(message.member.roles.cache.some(r => r.name === '?'))
         return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)
        };

         request
           (
               {
                 url: url,
                 json: true
                }, 
               function (error, response, body) 
                 {
                   var string ='';
                   if (!error && response.statusCode === 200) 
                      {
                        let entry = body
                         console.log(entry.length)
                        var slxn = 0;
                        for (let i=1; i<entry.length; i++)
                             {
                               var b = entry[i]["name"];
                               if(b.substring(0,2) == 'xn'  || b.substring(0,2) == 'XN'  || b.substring(0,10) == 'Xóm Nghiện'  || b.substring(0,10) == 'xóm nghiện'  || b.substring(0,10) == 'XÓM NGHIỆN')
                                {
                                  slxn = slxn + 1;
                                }
                             }
                                  string = string + '```+ Số lượng Gang *Xóm Nghiện* đang online: '+ slxn +'\n';
                                  string = string + '------------------------------------  \n';
                                  string = string + '+ Danh Sách Gang *Xóm Nghiện* đang online: \n';
                                  var o = 1;
                                   for (let i=1; i<entry.length; i++) 
                                       {
                                          var b = entry[i]["name"];
                                          var a = entry[i]["id"];
                                          var c = entry[i]["identifiers"][0].substr(6,15);
                                          if(b.substring(0,2) == 'xn'  || b.substring(0,2) == 'XN'  || b.substring(0,10) == 'Xóm Nghiện'  || b.substring(0,10) == 'xóm nghiện'  || b.substring(0,10) == 'XÓM NGHIỆN')
                                          {
                                                string = string +" #"+ o +". " + " [Id: "+ a +"]" +'  ==>  '+ b + '\n';
                                                    o = o + 1;
                                               } 
                                       }
                                  string = string + '------------------------ \n';
                                  string = string + '© Copyright by Pegasus Roleplay \n';
                                  string = string + "```";
                                   message.reply(string);
                       }
                   }
             )   
   }

   ///======================== INFO GANG Devil Ducks =============================

/*if (command == '.devil') 
   {
       {
         if(message.member.roles.cache.some(r => r.name === '.'))
         return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)
        };

         request
           (
               {
                 url: url,
                 json: true
                }, 
               function (error, response, body) 
                 {
                   var string ='';
                   if (!error && response.statusCode === 200) 
                      {
                        let entry = body
                         console.log(entry.length)
                        var sldevil = 0;
                        for (let i=1; i<entry.length; i++)
                             {
                               var b = entry[i]["name"];
                               if(b.substring(0,11) == 'Devil Ducks' || b.substring(0,2) == '^8' )
                               {
                                  sldevil = sldevil + 1;
                                }
                             }
                                  string = string + '```+ Số lượng Gang *Devil Ducks* đang online: '+ sldevil +'\n';
                                  string = string + '------------------------------------  \n';
                                  string = string + '+ Danh Sách Gang *Devil Ducks* đang online: \n';
                                  var o = 1;
                                   for (let i=1; i<entry.length; i++) 
                                       {
                                          var b = entry[i]["name"];
                                          var a = entry[i]["id"];
                                          var c = entry[i]["identifiers"][0].substr(6,15);
                                          if(b.substring(0,11) == 'Devil Ducks' || b.substring(0,2) == '^8' )
                                             {
                                                string = string +" #"+ o +". " + " [Id: "+ a +"]" +'  ==>  '+ b + '\n';
                                                    o = o + 1;
                                               } 
                                       }
                                  string = string + '------------------------ \n';
                                  string = string + '© Copyright by Kaito \n';
                                  string = string + "```";
                                   message.reply(string);
                       }
                   }
             )   
   }

///======================== INFO WOW2 ==============================

if (command == '.wow2') {{
  if(message.member.roles.cache.some(r => r.name === '.'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};       

      request({
    url: url,
    json: true
}, function (error, response, body) {
    var string ='';
    if (!error && response.statusCode === 200) {
        let entry = body
        console.log(entry.length) // Print the json response

        var slwow2 = 0;
        for (let i=1; i<entry.length; i++) {
          var b = entry[i]["name"];
          if(b.substring(0,4) == 'WOW2'  || b.substring(0,5) == 'WOW 2'){
            slwow2 = slwow2 + 1;
           }

        }

        string = string + '```+ Số lượng Gang WOW 2 đang online: '+ slwow2 +'\n';
        string = string + '---------------------------------- \n';
        string = string + '+ Danh Sách Gang WOW 2 đang online: \n';
        var o = 1;
         for (let i=1; i<entry.length; i++) {
             var b = entry[i]["name"];
             var a = entry[i]["id"];
             if(b.substring(0,4) == 'WOW2' || b.substring(0,5) == 'wOW 2'){
             string = string +" #"+ o +". " + " [Id: "+ a +"]" +'  ==>  '+ b + '\n';
             o = o + 1;
             } 
         }
         string = string + '-------------------------------------- \n';
         string = string + '© Copyright by Kaito ☞ Do not Reup \n';
         string = string + "```";
         message.reply(string);
    }
})  }

///======================= INFO GANG  Lưỡi Dao ==========================

if (command == '.ld') 
   {
       {
         if(message.member.roles.cache.some(r => r.name === '.'))
         return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)
        };

         request
           (
               {
                 url: url,
                 json: true
                }, 
               function (error, response, body) 
                 {
                   var string ='';
                   if (!error && response.statusCode === 200) 
                      {
                        let entry = body
                         console.log(entry.length)
                        var slld = 0;
                        for (let i=1; i<entry.length; i++)
                             {
                               var b = entry[i]["name"];
                               if(b.trim().indexOf("Peaky blinders") == 0|| b.trim().indexOf("🔪") == 0 )
                               {
                                  slld = slld + 1;
                                }
                             }
                                  string = string + '```+ Số lượng Gang *Lưỡi Dao* đang online: '+ slld +'\n';
                                  string = string + '------------------------------------  \n';
                                  string = string + '+ Danh Sách Gang *Lưỡi Dao* đang online: \n';
                                  var o = 1;
                                   for (let i=1; i<entry.length; i++) 
                                       {
                                          var b = entry[i]["name"];
                                          var a = entry[i]["id"];
                                          var c = entry[i]["identifiers"][0].substr(6,15);
                                          if(b.trim().indexOf("🔪") == 0|| b.trim().indexOf("Peaky blinders") == 0 )
                                             {
                                                string = string +" #"+ o +". " + " [Id: "+ a +"]" +'  ==>  '+ b + '\n';
                                                    o = o + 1;
                                               } 
                                       }
                                  string = string + '------------------------ \n';
                                  string = string + '© Copyright by Kaito \n';
                                  string = string + "```";
                                   message.reply(string);
                       }
                   }
             )   
   }

///======================== INFO Gang Yakuza ==============================

if (command == '.yakuza') {{
  if(message.member.roles.cache.some(r => r.name === '.'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};       

      request({
    url: url,
    json: true
}, function (error, response, body) {
    var string ='';
    if (!error && response.statusCode === 200) {
        let entry = body
        console.log(entry.length) // Print the json response

        var slyakuza = 0;
        for (let i=1; i<entry.length; i++) {
          var b = entry[i]["name"];
          if(b.substring(0,6) == 'Yakuza'  || b.substring(0,6) == 'YAKUZA'){
            slyakuza = slyakuza + 1;
           }

        }

        string = string + '```+ Số lượng Gang Yakuza đang online: '+ slyakuza +'\n';
        string = string + '---------------------------------- \n';
        string = string + '+ Danh Sách Gang Yakuza đang online: \n';
        var o = 1;
         for (let i=1; i<entry.length; i++) {
             var b = entry[i]["name"];
             var a = entry[i]["id"];
             if(b.substring(0,6) == 'Yakuza' || b.substring(0,6) == 'YAKUZA'){
             string = string +" #"+ o +". " + " [Id: "+ a +"]" +'  ==>  '+ b + '\n';
             o = o + 1;
             } 
         }
         string = string + '-------------------------------------- \n';
         string = string + '© Copyright by Kaito ☞ Do not Reup \n';
         string = string + "```";
         message.reply(string);
    }
})  }

*/

///==================== GANG =======================

if (command == '.gang')
   {
       {
          if(message.member.roles.cache.some(r => r.name === '?'))
          return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)
       };
     
        request
         (
             {
                url: url,
                json: true
             }, 
                   function (error, response, body) 
                   {
                      // var string ='';
                       if (!error && response.statusCode === 200) 
                         {
                           let entry = body
                           console.log(entry.length)

                           var slaod = 0;var slxn = 0;
                           for (let i=1; i<entry.length; i++) 
                               {
                                  var a = entry[i]["name"]; 
                                  if(a.substring(0,3) == 'AOD'  || a.substring(0,3) == 'aod')
                                  {
                                     slaod = slaod + 1;
                                    }                  
                                      if(a.substring(0,2) == 'xn'  || a.substring(0,2) == 'XN'  || a.substring(0,10) == 'Xóm Nghiện'  || a.substring(0,10) == 'xóm nghiện'  || a.substring(0,10) == 'XÓM NGHIỆN')
                                     {
                                      slxn = slxn + 1;
                                     } 
                                     /* if(a.substring(0,11) == 'Devil Ducks' || a.substring(0,2) == '^8' )
                                     {
                                       sldevil = sldevil + 1;
                                      }    
                                      if(a.substring(0,4) == 'WOW2' || a.substring(0,5) == 'WOW 2' )  
                                     {
                                      slwow2 = slwow2 +1;
                                      }
                                      if(a.trim().indexOf("🔪") == 0  || a.trim().indexOf("Peaky blinders") == 0 )
                                      {
                                        slld = slld + 1;
                                       }
                                       if(a.substring(0,6) == 'Yakuza' || a.substring(0,6) == 'YAKUZA' )  
                                     {
                                      slyakuza = slyakuza +1;
                                      }*/
                               }
                               const exampleEmbed = new Discord.MessageEmbed()
                                  .setColor('#126dff')
                                  .setAuthor('Server Pegasus Roleplay.'  , 'https://cdn.discordapp.com/attachments/858925008314171413/861124074317938748/0e23af4db83a8f10f3816e6b4d881332116bda6874bdda9ccc829a52f39935a9_2.gif' )
                                  .setTitle('Các Gang Server.')
                                  .setThumbnail('https://cdn.discordapp.com/attachments/858925008314171413/861124074317938748/0e23af4db83a8f10f3816e6b4d881332116bda6874bdda9ccc829a52f39935a9_2.gif')
                                  .setTimestamp()
                                  .setFooter('Edit by Pegasus Roleplay', 'https://cdn.discordapp.com/attachments/858925008314171413/861124043331993660/pegasus_1.jpg')
                                  .addFields(                        
                                              {name:'- Số Lượng Gang Angel of Deaths:' +"   " +slaod ,value: '➖➖➖➖➖➖➖➖➖➖' },
                                              {name:'- Số Lượng Gang Xóm Nghiện:' +"  " +slxn ,value: '➖➖➖➖➖➖➖➖➖➖' },
                                            )
                                  .setImage('https://cdn.discordapp.com/attachments/697049699193978941/746691133660332092/divider_1.gif')    
                                   message.channel.send(exampleEmbed);          
                         }
                     }
          )
   }
       
});
client.login('ODYxNTk1NDAzNTM0NDY3MDgy.YOMFPw.W1W2wNa3gY1Qd601fJ4jsb1ps5I');

