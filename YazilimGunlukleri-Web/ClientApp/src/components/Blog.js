import React, { Component } from 'react';
import './Blog.css';

export class Blog extends Component {
    displayName = Blog.name

    render() {
        return (
            <div className="mx-auto container blogList">
                <div className="blog">
                        <div className="blogHead">
                            <img src="https://dummyimage.com/180x180/000/fff" alt="blogName" />
                        </div>
                    <div className="blogBody">
                            <h3>Yazılıma nasıl başlanır?</h3>
                            <p className="text-muted"> Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. </p>
                        <div className="blogFooter">
                            <p>#software</p>
                            <p>Created date: 25.06.2021 </p>
                        </div>
                        <a href="/BlogDetail" className="blogDetailBtn">Devamını Oku</a>
                        </div>
                </div>
                <div className="blog">
                    <div className="blogHead">
                        <img src="https://dummyimage.com/180x180/000/fff" alt="blogName" />
                    </div>
                    <div className="blogBody">
                        <h3>Yazılıma nasıl başlanır?</h3>
                        <p className="text-muted"> Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. </p>
                        <div className="blogFooter">
                            <p>#software</p>
                            <p>Created date: 25.06.2021 </p>
                        </div>
                        <a href="/BlogDetail" className="blogDetailBtn">Devamını Oku</a>
                    </div>
                </div>
            </div>
        );
    }
}
