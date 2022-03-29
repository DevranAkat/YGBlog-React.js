import React, { Component } from 'react';
import './Blog.css';

export class Blog extends Component {
    displayName = Blog.name
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    id: 0,
                    title: "Yazılıma nasıl başlanır?",
                    text: "Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit. Lorem ipsum sit amet color dit.",
                    img: "https://dummyimage.com/180x180/000/fff",
                    tags: ["#software"],
                    date: "25.06.2021"
                }
            ]
        };
    }



    render() {
        return (
            <div className="mx-auto blogList">
                {
                    this.state.blogs.map((item, index) => {
                        return (
                            <div className="blog" key={item.id}>
                                <div className="blogHead">
                                    <img src={item.img} alt="blogName" />
                                </div>
                                <div className="blogBody">
                                    <h3>{item.title}</h3>
                                    <p className="text-muted">{item.text}</p>
                                    <div className="blogFooter">
                                        {
                                            item.tags.map((tag, index) => {
                                                return (
                                                    <p>{tag}</p>
                                                )
                                            })
                                        }
                                        <p>Created date: '${item.date}'</p>
                                    </div>
                                    <a href="/BlogDetail" className="blogDetailBtn">Devamını Oku</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
