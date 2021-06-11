import React, { Component } from 'react';
import './contributorDetail.css';

export class YunusOzdemir extends Component {
    displayName = YunusOzdemir.name

    render() {
        return (
            <main role="main">
                <section class="about-page-section section-spacing">
                    <div class="jumbotron">
                        <div class="row">
                            <div class="col-auto">
                                <div>
                                        <img src="https://avatars.githubusercontent.com/u/54598461?v=4" class="contributorImage img-fluid" alt="yunuslogo" title="yunuslogo" />
                                </div>
                                </div>
                            <section class="col-auto about">
                                <h1 class="about-title">Hakkımda</h1>
                                <hr class="about-border" />
                                <p class="about-desc">
                                    <p class="MsoNormal"><span class="aboutHeaderText" lang="TR">Merhaba. Ben Yunus Özdemir.</span></p>
                                    <p class="MsoNormal" class="text-justify">
                                        <span lang="TR">Profilo Mesleki ve Teknik Anadolu lisesinde okuyorum. Son sınıfım veritabanı
                                        öğrencisiyim. 18 yaşındayım araştırmayı ve yeni şeyler öğrenmekten hoşlanırım. Bisiklet
                                        sürmeyi ve müzik dinlemeyi de severim. Peki yazılım merakım nereden geliyor? Küçük
                                        yaşlarımdan
                                        beri oyunlara ve oyunların arkaplanında yazılan kodları merak etmişimdir.
                                        aslında yazılım serüvenim ve aşkım bu oyunlardan geliyor. Yakın zamana kadar backend ile
                                        ilgileniyordum backend tarafında C# ve .net kullanıyordum. Ama frontende de geçmem
                                        gerektiğini farkına varıp frontende de atılmaya karar verdim.</span></p>
                                    <p class="MsoNormal">
                                        <span lang="TR">Okulda öğrendiklerim aslında sadece temelimi oluşturmaya yardım etti. Okulda
                                        C# ile birkaç uygulama geliştirmiştik
                                        ama hepsi başlangıç düzeyinde ve beni zorlamayan şeylerdi, ben de bunlarla yetinmeyip
                                        Udemy'den bir kaç kurs alıp yeni şeyler öğrenmeye karar verdim.</span></p>
                                    <p class="MsoNormal"><span>Yaklaşık 1 aydır Webbilir’de staj yapıyorum.
                                    Asp.Net Core teknolojisini kullanarak çeşitli projeler geliştiriyoruz.</span></p>
                                    <p class="MsoNormal"><span>Burdan önce de 7 ay boyunca MakasApp'te staj yaptım. Ve yine
                                    orada da Asp.Net Coreteknolojisini kullanarak
                                    çeşitli projeler geliştirdik..</span></p>
                                    <p class="MsoNormal"> <span>Genel olarak yazılım geçmişim böyle benimle
                                        irtibata geçmek isterseniz instagram adresime <a href="https://www.instagram.com/yuunusozdemir/">buradan </a>
                                         ulaşabilirsiniz. Ayrıcasayfanın sol alt kısmından diğer sosyal medya hesaplarıma ulaşabilirsiniz.</span>
                                    </p>
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
