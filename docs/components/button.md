# Button

Button is a custom button web component that encapsulates button functionality with our default design look.

## Import

```ts
import { NagaButton } from 'naga-ui'
```

<script setup>
import '../../build/bundle.js'
</script>

## Basic usage

<naga-button>
	Hello world
</naga-button>

```html
<naga-button>
	Hello world
</naga-button>
```


## Disabled state

We can toggle disabled state by passing `boolean` value to `disabled` attribute

<naga-button disabled>
	Hello world
</naga-button>

```html
<!-- Enabled -->
<naga-button>
	Hello world
</naga-button>

<naga-button :disabled="false">
	Hello world
</naga-button>

<!-- Disabled -->
<naga-button disabled>
	Hello world
</naga-button>

<naga-button :disabled="true">
	Hello world
</naga-button>
```

## Sizes

There are 4 variants of button sizes avaiable: `xs` | `sm` | `md` | `lg`

### Extra small `xs`

<div class="component-display-block mtop">
	<naga-button size="xs">
		Hello world
	</naga-button>
	<naga-button size="xs" disabled>
		Hello world
	</naga-button>
</div>

```html
<naga-button size="xs">
	Hello world
</naga-button>
```

### Small `sm`

<div class="component-display-block mtop">
	<naga-button size="sm">
		Hello world
	</naga-button>
	<naga-button size="sm" disabled>
		Hello world
	</naga-button>
</div>

```html
<naga-button size="sm">
	Hello world
</naga-button>
```

### Medium `md`

<div class="component-display-block mtop">
	<naga-button size="md">
		Hello world
	</naga-button>
	<naga-button size="md" disabled>
		Hello world
	</naga-button>
</div>

```html
<naga-button size="md">
	Hello world
</naga-button>

<naga-button>
	Hello world
</naga-button>
```

### Large `lg`

<div class="component-display-block mtop">
	<naga-button size="lg">
		Hello world
	</naga-button>
	<naga-button size="lg" disabled>
		Hello world
	</naga-button>
</div>

```html
<naga-button size="lg">
	Hello world
</naga-button>
```

## Full width

We can toggle full width style by passing `boolean` value to `isFull` attribute

<div class="component-display-block mtop display-col display-full">
	<naga-button isFull>
		Hello world
	</naga-button>
	<naga-button isFull disabled>
		Hello world
	</naga-button>
</div>

```html
<!-- Enabled -->
<naga-button isFull>
	Hello world
</naga-button>

<naga-button :isFull="true">
	Hello world
</naga-button>

<!-- Disabled -->
<naga-button>
	Hello world
</naga-button>

<naga-button :isFull="false">
	Hello world
</naga-button>
```

### onClick callback

We have a callback props for click event

```html
<naga-button :onClick="doClickEvent()">
	Hello world
</naga-button>
```
