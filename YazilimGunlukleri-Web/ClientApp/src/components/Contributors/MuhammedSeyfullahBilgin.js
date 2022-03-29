import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./contributorDetail.css";

export class MuhammedSeyfullahBilgin extends Component {
    displayName = MuhammedSeyfullahBilgin.name;
    yourName = "Muhammed Seyfullah Bilgin";

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
                                        src="data:image/png;base64,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"
                                        class="contributorImage img-fluid"
                                        alt="seyfullahLogo"
                                        title="Muhammed Seyfullah Bilgin Profil Resmi"
                                    />
                                </div>
                            </div>
                            <section class="col-auto about">
                                <h1 class="about-title">Hakkımda</h1>
                                <hr class="about-border" />
                                <p class="about-desc">
                                    <p class="MsoNormal">
                                        <span class="aboutHeaderText" lang="TR">
                                            Merhaba. Ben {this.yourName}.
                                        </span>
                                    </p>
                                    <p class="MsoNormal" class="text-justify">
                                        <span lang="TR">
                                            Hacettepe Üniversitesi Bilgisayar Mühendisliği bölümünde okumaktayım.
                                            Boş zamanlarımda açık kaynak kodlu projeler geliştirmeyi seviyorum ve React&ReactNative, görüntü işleme ile ilgileniyorum.
                                        </span>
                                    </p>
                                    <p class="MsoNormal">
                                        {" "}
                                        <span>
                                            Benimle buradan{" "}
                                            <a href="https://www.linkedin.com/in/seyfullahbilgin/">
                                                buradan{" "}
                                            </a>
                                            iletişime geçebilirsiniz.
                                        </span>
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
