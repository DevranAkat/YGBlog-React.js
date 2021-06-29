import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./contributorDetail.css";

export default class ErtugrulEmreCihan extends Component {
  displayName = ErtugrulEmreCihan.name;
  yourName = "Ertuğrul Emre Cihan";

  render() {
    return (
      <main role="main">
        <section class="about-page-section section-spacing">
          <div class="jumbotron">
            <Breadcrumb>
              <LinkContainer to={"/"}>
                <Breadcrumb.Item>Ana Sayfa</Breadcrumb.Item>
              </LinkContainer>
              <LinkContainer to={"/Contributors/"}>
                <Breadcrumb.Item>Tanışma</Breadcrumb.Item>
              </LinkContainer>
              <Breadcrumb.Item active>{this.yourName}</Breadcrumb.Item>
            </Breadcrumb>
            <div class="row">
              <div class="col-auto">
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/64169298?v=4"
                    class="contributorImage img-fluid"
                    alt="meraklicoder"
                    title="Ertuğrul Emre Cihan Profil Resmi"
                  />
                </div>{" "}
              </div>{" "}
              <section class="col-auto about">
                <h1 class="about-title"> HAKKIMDA </h1>{" "}
                <hr class="about-border" />
                <p class="about-desc">
                  <p class="MsoNormal">
                    <span class="aboutHeaderText" lang="TR">
                      Merhaba, Ben {this.yourName}{" "}
                    </span>{" "}
                  </p>{" "}
                  <p class="MsoNormal" class="text-justify">
                    <span lang="TR">
                      Ben Lise 1 Öğrencisiyim Ama Benim İnandığım Birşey Var O
                      Da Çocuklarında Birşeyler Yapabileceği Bir Şey Yapmak
                      İstesek Bize Sen Daha Çocuksun Deniyor Ben Dünyaca Tanınan
                      Bir Yazılım Mühendisi Olup Bunun Böyle Olmadığını
                      İnsanlara Göstermek İstiyorum Ve Bu Yola Çıkarken De 1
                      Milyon İstihdam Projesi Çıktı Ortaya Ben Gerekten Çok
                      Mutlu Olmuştum Buraya Kayıt Olabilmek İçin Çok Uğraştım ve
                      Sonunda Başardım. Yazılım Mühendisi Olup Çocuklarında
                      Birşeyler Yapabileceğini Göstereceğim Umarım Ki Öyle
                      Olur...{" "}
                    </span>{" "}
                  </p>{" "}
                  <p class="MsoNormal">
                    <span>
                      <h2>KÜÇÜKLÜĞÜMDE NASILDIM ?</h2>{" "}
                    </span>{" "}
                  </p>{" "}
                  <hr class="about-border" />
                  <p class="MsoNormal">
                    <span lang="TR">
                      Yazılıma nasıl başladım, nereden başladım gibi sorular
                      olabilir aklınızda. Ben çocukluğumdan beridir mühendislik
                      alanındaki işlere bir ilgim var küçükken elektronik
                      eşyaların içini açıp bakmayı çok severdim. Modem sökerdim,
                      bilgisayar parçalardım kısaca her şeyi yapardım &#128512;.
                      Bunun yanında o elektronik eşyalar nasıl yapılır hep merak
                      ettim "Onlar nasıl çalışıyor." diye hep süzülüp geçerdi
                      beynimden ama aklım ermezd tabi, ama büyüdükçe insan
                      öğreniyor insan büyüdükçe öğrenmeyi öğreniyor bende öyle
                      oldum.{" "}
                    </span>{" "}
                  </p>{" "}
                  <p class="MsoNormal">
                    <span>Gel gelelim yazılım hayatımın başlangıcına. </span>{" "}
                  </p>{" "}
                  <p class="MsoNormal">
                    <span>
                      <h2>YAZILIM HAYATIM NASIL BAŞLADI ?</h2>{" "}
                    </span>{" "}
                  </p>{" "}
                  <hr class="about-border" />
                  <p class="MsoNormal">
                    {" "}
                    <span>
                      Yazılıma ben arduino ile başladım zaten demiştim
                      elektronik ile aram fazlasıyla var diye. Ardunio seti
                      aldım kendime ve başladım, ilk kod yazdığımda ekranda
                      gördüğüm şeyin sadece kod olduğunu biliyordum kendime de
                      şu soruyu soruyordum "Ben bunu nasıl öğreneceğim." diye
                      soruyordum ama size bir şey söyliyeyim mi. Kodlamanın
                      altında EMEK, ÇOK ÇALIŞMA, AZİM, İSTEK yatıyor bunlar
                      varsa bilin ki sizde kodlamayı bir gün öğreneceksiniz.
                      Unutmayın Zorlanmadan Öğrenemezsiniz.{" "}
                    </span>{" "}
                  </p>{" "}
                  <p>
                    <span>
                      <h2 className="promise">
                        {" "}
                        Kazananlar hiç hata yapmayanlar değil asla pes
                        etmeyenlerdir.{" "}
                      </h2>
                    </span>{" "}
                  </p>
                </p>{" "}
              </section>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </main>
    );
  }
}
