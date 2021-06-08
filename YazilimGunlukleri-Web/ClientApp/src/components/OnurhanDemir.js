import React, { Component } from 'react';
import './contributorDetail.css';

export class OnurhanDemir extends Component {
    displayName = OnurhanDemir.name

    render() {
        return (
            <main role="main">
                <section class="about-page-section section-spacing">
                    <div class="jumbotron">
                        <div class="row">
                            <div class="col-auto">
                                <div>
                                    <img src="https://avatars.githubusercontent.com/u/60575283?v=4" class="contributorImage img-fluid" alt="yunuslogo" title="yunuslogo" />
                                </div>
                            </div>
                            <section class="col-auto about">
                                <h1 class="about-title">Hakkımda</h1>
                                <hr class="about-border" />
                                <p class="about-desc">
                                    <p class="MsoNormal"><span class="aboutHeaderText" lang="TR">Merhaba. Ben Onurhan Demir.</span></p>
                                    <p class="MsoNormal" class="text-justify">
                                        <span lang="TR">Bu sene liseden mezun oluyorum. 18 Yaşındayım ve uzun zamandır Web Frontendten ziyade
                                            tasarımın her dalına ilgi duyarak ilerledim. Mobil arayüz geliştirme farklı şeyler tasarlamayla uğraşarak
                                            kendimi geliştirmeye devam ediyorum. Bir süredir web tasarımıyla uğraşıyorum frontend tarafında birçok teknolojiyi
                                            kullanmaya , öğrenmeye devam ediyorum. Ağırlıklı olarak javascript dünyasındayım yakın zamanda vue-js deneyimleyerek
                                            büyük çapta projelere devam edeceğim.</span></p>
                                    <p class="MsoNormal">
                                        <span lang="TR">Okulum ve çevrem alanımdan çok uzak ve önyargılı olduğundan dolayı sürekli kendi kendimi geliştirdim ve
                                        geliştirmeye devam ediyorum. Yazılım hayatıma oyun geliştirme ile başladım ancak kısa zamanda benim için iyi bir seçenek
                                        olmadığına karar verip yeni şeyler denedim. Sürekli deneyerek sonunda kendimi keşfedip başarılı olduğum alanda ilerledim.</span></p>
                                    <p class="MsoNormal"><span>Uzun zamandır çeşitli ekipler kurarak yeni başlayanlara destek ve öğretmek amacıyla
                                        kar amacı gütmeyen topluluklar oluşturdum bu alana bir çok kişi kazandırdım. Yakın zamanda iş arayışına başlayacağım.</span></p>
                                    <p class="MsoNormal"> <span>Benimle iletişime geçebilmek için <a href="https://www.instagram.com/onurhandtr/">buradan </a>
                                         ulaşabilirsiniz.</span>
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

