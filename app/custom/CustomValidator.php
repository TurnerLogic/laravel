<?php

class CustomValidator extends Illuminate\Validation\Validator {

	/**
	 * Rules in this array will be called even when input is empty.
	 */
	protected $overriddenImplicitRules = array('Todo');
	
	/**
	 * Override default constructor to allow for adding to implict rules.
	 */
	public function __construct($translator, $data, $rules, array $messages = array(), array $customAttributes = array())
	{
		parent::__construct($translator, $data, $rules, $messages, $customAttributes);
		$this->implicitRules = array_merge($this->overriddenImplicitRules, $this->implicitRules);
	}
	
	/**
	 * Sample validation method.
	 */
	public function validateTodo($attribute, $value, $parameters)
	{
		return true;
	}
	
}
