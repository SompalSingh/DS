---
layout: comps
title: Form
description: A form consists of a group of related fields and allows users to input information.
group: components
aliases:
  - "/components/"
  - "/docs/5.2/components/"
toc: true
---

<ul class="nav nav-tabs mb-3 primary-tab" id="primary-tabs" role="tablist">
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
    <a class="nav-link"  href="../form/"> Code and Examples</a>
  </li>
  </li>
  <li class="nav-item" role="presentation" style="margin-bottom:0;">
   <a class="nav-link active" style="border-bottom:3px solid #3399FF" href="../form-anatomy/">Guidelines  </a>
  </li>
</ul>

Use forms when user input is required to complete some action. Forms direct users to provide and submit relevant information. 

Common form components include text fields, selects, radio buttons, checkboxes, date pickers, toggles, and buttons.

## 1 Best Practices
<div class="mt-24"></div>

- <span class="sp-title">Title</span> Use a concise form title. This helps the user understand the form’s context. 

- <span class="sp-title">Labels</span> Standard label alignment is left-aligned with the field underneath. Use a combination of a concise label and supportive helper text for clarification of field input. 
- <span class="sp-title">Placeholder text</span> asdf 
- <span class="sp-title">Logical</span> Avoid placeholders when possible. Never use placeholder text to communicate critical information — this is not accessible. Instead, use field labels or helper text to describe the purpose of the field and how to use it. Placeholders can, however, be used for search fields or some short example entries. 
- <span class="sp-title">Required field</span> Clearly communicate fields that are required. Don’t rely on asterisks alone to communicate which fields are required. 
- <span class="sp-title">Form section</span> Group information logically into form sections. 
- <span class="sp-title">Disabled fields</span> Show disabled fields if users need to know what controls might not be available to them. 
- <span class="sp-title">Form footer</span> Always use a submit button and distinguish primary and secondary 


## 2. Content guidelines
<div class="do-dont do">
    <div class="box">
    <img src="/docs/5.2/assets/brand/custom/do.svg" class="w-100" alt="" />
    </div>
    <div class="content">
        <strong>Do’s</strong>
        <ul>
            <li>
                <p>Group related information into form sections.</p>
            </li>
            <li>
                <p>Use one form column.</p>
            </li>
            <li>
                <p>Provide smart default values.</p>
            </li>
            <li>
                <p>Use input masks to help users understand fields correctly.</p>
            </li>
            <li>
                <p>Use clear, binary actions for clean form submission.</p>
            </li>
            <li>
                <p>Give feedback to show that form is being submitted.</p>
            </li>
        </ul>
    </div>
</div>
<div class="clearfix"></div>
<div class="clearfix"></div>
<div class="do-dont dont">
<div class="clearfix"></div>
    <div class="box">
    <img src="/docs/5.2/assets/brand/custom/dont.svg" class="w-100" alt="" />
    </div>
    <div class="content">
        <strong>Dont’s</strong>
        <ul>
            <li>
                <p>Provide one form of unrelated information.</p>
            </li>
            <li>
                <p>Use multiple form columns.</p>
            </li>
            <li>
                <p>Provide random default values.</p>
            </li>
            <li>
                <p>Use default inputs for particular fields.</p>
            </li>
            <li>
                <p>Use multiple action buttons and a reset button at the bottom of the form.</p>
            </li>
            <li>
                <p>Give no feedback on submit.</p>
            </li>
        </ul>
    </div>
</div>
<div class="clearfix"></div>

## 3. Accessibility
<div class="mt-24"></div>

- Autofocus the first field by default. This allows users to tab through elements in the form in a logical way.
- Never disable a submit button, even if all of the required fields aren’t filled in Instead, describe what needs to be done using validation and error messages.
- Match keyboard to input on mobile.
- Avoid using placeholder text wherever possible. If you do use placeholder text, don’t include any critical information only as placeholder text.
- Make sure all fields have an accessible label visible. (Search fields are sometimes an exception to this.)
- Use autocompletion to limit typing for users.
  
## 4. Input field
 
<div class="grey-box pt-0">
  <div class="sub-heading">Anatomy</div>
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/form/form1.png" width="700" class="max-w-100  mb-40" alt="" />
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/form/form2.png" width="700" class="max-w-100  mb-40" alt="" />
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/form/form3.png" width="700" class="max-w-100  mb-40" alt="" />
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/form/form4.png" width="700" class="max-w-100  mb-40" alt="" />
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/form/form5.png" width="700" class="max-w-100  mb-40" alt="" />
  <img src="/docs/5.2/assets/brand/custom/anatomy-images/form/form6.png" width="700" class="max-w-100  mb-40" alt="" />
</div>

