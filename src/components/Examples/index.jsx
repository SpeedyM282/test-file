import React from 'react'
import {NormalInput, TextAreaInput, CheckboxArea} from '../ForumElements/Inputs';
import Spinner from '../Spinner'

export default function index() {
  return (
    <div>
      <NormalInput/>
      <TextAreaInput/>
      <CheckboxArea/>
      <Spinner/>
    </div>
  )
}
