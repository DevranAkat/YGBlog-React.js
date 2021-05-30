import React, { Component } from 'react';

export class YunusOzdemir extends Component {
    displayName = YunusOzdemir.name

    render() {
        return (
            <main role="main">
                <section class="about-page-section section-spacing">
                    <div class="container">
                        <div class="row">
                            <section class="col-xl-5 col-12 about-image-section">
                                <div class="container">
                                    <div class="row align-items-center">
                                        <div class="col-lg-12">
                                            <nav class="navbar navbar-expand-lg navbar-light">
                                                <img src="https://avatars.githubusercontent.com/u/54598461?v=4"  alt="yunuslogo" title="yunuslogo" />
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="col-xl-6 col-12 about-content-section">
                                <h1 class="about-title">Hakkımda</h1>
                                <hr class="about-border" />
                                <p class="about-desc">
                                    <p class="MsoNormal"><span lang="TR">Merhaba. Ben Yunus Özdemir.</span></p>
                                    <p class="MsoNormal">
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
                                        irtibata geçmek isterseniz instagram adresime <a href="https://www.instagram.com/yuunusozdemir/">buradan</a>
                                        ulaşabilirsiniz. Ayrıcasayfanın sol alt kısmından diğer sosyal medya hesaplarıma ulaşabilirsiniz.</span>
                                    </p>
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
                <footer class="bg-white footer_design_2 pt-xl-5 pt-md-4 pt-sm-2 pt-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <ul class="social_list list-inline my-4 text-muted">
                                    <li class="list-inline-item">
                                        <a href="https://twitter.com/mryunuszx" rel="noreferrer" target="_blank" title="Yunus Özdemir Twitter">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://www.instagram.com/yuunusozdemir/" rel="noreferrer" target="_blank" title="Yunus Özdemir Instagram">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://www.linkedin.com/in/yunus-özdemir-61b5a11a6/" rel="noreferrer" target="_blank" title="Yunus Özdemir Linkedin">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://github.com/YunusOzdemirr" rel="noreferrer" target="_blank" title="Yunus Özdemir Github">
                                            <i class="fab fa-github"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        );
    }
}
