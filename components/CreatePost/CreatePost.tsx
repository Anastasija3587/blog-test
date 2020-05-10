import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Wrap, Form, Textarea, Input, Btn } from './CreatePost.styled';
import * as OperationBlog from '../../redux/blog/blogOperations';

interface Props {
  addPost: (post) => void;
}

const CreatePost = ({ addPost }: Props): JSX.Element => {
  const [input, setInput] = useState('');
  const [textarea, setTextarea] = useState('');

  const onChangeInput = (e): void => {
    setInput(e.target.value);
  };

  const onChangeTextarea = (e): void => {
    setTextarea(e.target.value);
  };

  const reset = (): void => {
    setInput('');
    setTextarea('');
  };

  const submitPost = (e): void => {
    e.preventDefault();
    if (input && textarea) {
      const newPost = {
        title: input,
        body: textarea,
      };
      addPost(newPost);
      reset();
    }
  };

  return (
    <Wrap>
      <Form onSubmit={submitPost}>
        <Input placeholder="enter title..." value={input} onChange={onChangeInput} />
        <Textarea
          rows="10"
          cols="45"
          name="text"
          placeholder="enter body..."
          value={textarea}
          onChange={onChangeTextarea}
        ></Textarea>
        <Btn type="submit">Add Post</Btn>
      </Form>
    </Wrap>
  );
};

const mapDispatchToProps = (dispatch): Props => ({
  addPost: (post): void => dispatch(OperationBlog.createPost(post)),
});

export default connect(null, mapDispatchToProps)(CreatePost);
